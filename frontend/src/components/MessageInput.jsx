import React, { useRef, useState } from 'react'
import { useChatStore } from '../store/useChatStore';
import { X, Image, Send } from "lucide-react";
import toast from 'react-hot-toast';

const MessageInput = () => {
    const [text, setText] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null);
    const { sendMessage } = useChatStore();

    const handleImageChange = (e) => { 
        const file = e.target.files[0];
        if(!file.type.startsWith("image/")){
            toast.error("Please select an image file");
            return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file)
    };

    const removeImage = () => {
         setImagePreview(null);
         if(fileInputRef.current) fileInputRef.current.value = "";
     };

    const handleSendMessage = async (e) => { 
        e.preventDefault();

        if(!text.trim() && !imagePreview) return;

        try {
            await sendMessage({
                text:text.trim(),
                image: imagePreview,
            })

            // Clear form
            setText("");
            setImagePreview(null);
            if(fileInputRef.current) fileInputRef.current.value = "";

        } catch (error) {
            console.error("Failed to send message:", error)
        }
    };

    return (
        <div className="p-3 w-100">
            {imagePreview && (
                <div className="mb-3 d-flex align-items-center gap-2">
                    <div className="position-relative">
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="rounded border border-secondary"
                            style={{ width: "80px", height: "80px", objectFit: "cover" }}
                        />
                        <button
                            type="button"
                            onClick={removeImage}
                            className="btn btn-sm btn-light p-0 position-absolute d-flex align-items-center justify-content-center"
                            style={{
                                top: "-8px",
                                right: "-8px",
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                            }}
                        >
                            <X size={12} />
                        </button>
                    </div>
                </div>
            )}

            <form onSubmit={handleSendMessage} className="d-flex align-items-center gap-2">
                <div className="flex-grow-1 d-flex gap-2">
                    <style>
                        {`.white-placeholder::placeholder {color: white; opacity: 1;}`}
                    </style>
                    <input
                        type="text"
                        className="form-control bg-transparent text-white border-secondary white-placeholder"
                        placeholder="Type a message..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />

                    <input
                        type="file"
                        accept="image/*"
                        className="d-none"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                    />

                    <button
                        type="button"
                        className={`btn btn-outline-secondary d-none d-sm-flex align-items-center justify-content-center rounded-circle p-2 ${imagePreview ? "text-success" : "text-success"
                            }`}
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <Image size={20} />
                    </button>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary btn-sm rounded-circle d-flex align-items-center justify-content-center"
                    disabled={!text.trim() && !imagePreview}
                    style={{ width: "40px", height: "40px" }}
                >
                    <Send size={18} />
                </button>
            </form>
        </div>
    );
}

export default MessageInput
