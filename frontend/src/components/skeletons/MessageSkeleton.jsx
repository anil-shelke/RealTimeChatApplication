const MessageSkeleton = () => {
  // Create an array of 6 items for skeleton messages
  const skeletonMessages = Array(6).fill(null);

  return (
    <div className="flex-grow-1 overflow-auto p-3">
      {skeletonMessages.map((_, idx) => (
        <div
          key={idx}
          className={`d-flex mb-4 ${idx % 2 === 0 ? "justify-content-start" : "justify-content-end"}`}
        >
          {/* Avatar */}
          <div className="d-flex flex-column align-items-center me-2">
            <div
              className="rounded-circle bg-secondary bg-opacity-50"
              style={{ width: "40px", height: "40px" }}
            ></div>
            <div
              className="bg-secondary bg-opacity-25 mt-1"
              style={{ width: "60px", height: "12px", borderRadius: "4px" }}
            ></div>
          </div>

          {/* Message bubble */}
          <div
            className="bg-secondary bg-opacity-25 rounded p-2"
            style={{ width: "200px", height: "64px" }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;
