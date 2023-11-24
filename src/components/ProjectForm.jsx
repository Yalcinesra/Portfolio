

const ProjectForm = ({ handleSubmit, formVeri, setFormVeri }) => {
  return (
    <article
      id="add-product"
      className="mb-4 mt-4  col col-lg-8 mx-auto border rounded-2 bg-opacity-50 bg-light"
    >
      <form className="p-2" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="add-name" className="form-label">
            Project Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formVeri.name}
            onChange={(e) => setFormVeri({ ...formVeri, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-title" className="form-label">
            Project Title
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formVeri.title}
            onChange={(e) => setFormVeri({ ...formVeri, title: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-live" className="form-label">
           Project Live Demo 
          </label>
          
          <input
            type="text"
            className="form-control"
            name="live"
            value={formVeri.live}
            onChange={(e) =>
              setFormVeri({ ...formVeri, live: e.target.value })
            }
            required
          />
        </div>
        <label htmlFor="add-image" className="form-label">
          Product Image
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://example.com/
          </span>
          <input
            type="url"
            className="form-control"
            name="image"
            value={formVeri.image}
            aria-describedby="basic-addon3"
            onChange={(e) =>
              setFormVeri({ ...formVeri, image: e.target.value })
            }
            required
          />
        </div>
        
        
        <div className="text-center">
          <button type="submit" className="add-to-cart btn btn-success btn-sm">
            Save To Project
          </button>
        </div>
      </form>
    </article>
  );
};

export default ProjectForm;
