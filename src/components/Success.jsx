const Success = ({ setEdited }) => {
  return (
    <div className="notification is-success">
      <button className="delete" onClick={() => setEdited(false)}></button>
      <p>Successfully Edited</p>
    </div>
  );
};

export default Success;
