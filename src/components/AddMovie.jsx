// src/components/AddMovie.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddMovie.css";

const AddMovie = () => {
  const navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: "",
    synopsis: "",
    posterUrl: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Hypothetical submission logic
    console.log("New Movie Data:", formData);
    // After submission, navigate back to Dashboard
    navigate("/");
  };

  // Handle cancel action
  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="add-movie-container">
      <h2>Add New Movie</h2>
      <form className="add-movie-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">
            Title<span className="required">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter movie title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="director">
            Director<span className="required">*</span>
          </label>
          <input
            type="text"
            id="director"
            name="director"
            value={formData.director}
            onChange={handleChange}
            required
            placeholder="Enter director's name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="genre">
            Genre<span className="required">*</span>
          </label>
          <select
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          >
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Thriller">Thriller</option>
            {/* Add more genres as needed */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="releaseYear">
            Release Year<span className="required">*</span>
          </label>
          <input
            type="number"
            id="releaseYear"
            name="releaseYear"
            value={formData.releaseYear}
            onChange={handleChange}
            required
            placeholder="e.g., 2025"
            min="1888" /* The year the first film was made */
          />
        </div>

        <div className="form-group">
          <label htmlFor="synopsis">
            Synopsis<span className="required">*</span>
          </label>
          <textarea
            id="synopsis"
            name="synopsis"
            value={formData.synopsis}
            onChange={handleChange}
            required
            placeholder="Enter a brief synopsis of the movie"
            rows="4"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="posterUrl">
            Poster Image URL<span className="required">*</span>
          </label>
          <input
            type="url"
            id="posterUrl"
            name="posterUrl"
            value={formData.posterUrl}
            onChange={handleChange}
            required
            placeholder="https://example.com/poster.jpg"
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
