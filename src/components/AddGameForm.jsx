import React, { useState } from "react";
import "./visuel/AddGameForm.css";

const AddGameForm = ({ onAddGame }) => {
    const [name, setName] = useState("");
    const [difficulty, setDifficulty] = useState("Facile");
    const [statut, setStatut] = useState("");
    const [image, setImage] = useState(null); // État pour l'image sélectionnée
    const [preview, setPreview] = useState(""); // État pour l'aperçu de l'image

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === "" || !image) return;

        onAddGame(name, difficulty, statut, image);
        setName("");
        setDifficulty("Facile");
        setStatut(false);
        setImage(null);
        setPreview("");
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file)); // Génère un aperçu de l'image
        }
    };

    return (
        <form className="add-game-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Ajoute un jeu" 
                className="form-input"
            />
            <select 
                value={difficulty} 
                onChange={(s) => setDifficulty(s.target.value)} 
                className="form-select"
            >
                <option value="Facile">Facile</option>
                <option value="Difficile">Difficile</option>
                <option value="Hardcore">Hardcore</option>
            </select>
            <select 
                value={statut} 
                onChange={(s) => setStatut(s.target.value)} 
                className="form-select"
            >
                <option value={false}>Non fav</option>
                <option value={true}>⭐</option>
            </select>
            <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange} 
                className="form-input"
            />
            {preview && (
                <div className="image-preview">
                    <img src={preview} alt="Aperçu" className="preview-img" />
                </div>
            )}
            <button type="submit" className="form-button">Ajouter</button>
        </form>
    );
};

export default AddGameForm;