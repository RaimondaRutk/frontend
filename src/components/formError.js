import  '../App.css';

const formError = (props) => {
    if (props.error) {
      return (
        <div style={{color: "red"}}>
          <p>{props.error}</p>
        </div>
      );
    }
    return null;
}

export default formError;