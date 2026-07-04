import React, { useState, useRef } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };

  const handleRemoveTag = (tagRemove) => {
    setTags(tags.filter((tag) => tag !== tagRemove));
  };

  return (
    <div>
      {tags?.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="flex items-center gap-2 text-sm text-ink bg-paper border border-line px-3 py-1 rounded">
              # {tag}
              <button onClick={() => handleRemoveTag(tag)}>
                <MdClose className="text-graphite hover:text-secondary" />
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 mt-3">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          className="text-sm bg-transparent border border-line px-3 py-2 rounded outline-none focus:border-primary transition-colors"
          placeholder="Add tags"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="w-8 h-8 flex items-center justify-center rounded border border-primary hover:bg-primary transition-colors disabled:opacity-40"
          onClick={addNewTag}
          disabled={!inputValue.trim()}
        >
          <MdAdd className="text-xl text-primary hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default TagInput;