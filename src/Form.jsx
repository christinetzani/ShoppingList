function handleFormSubmit(evt) {
    evt.preventDefault();
    console.log("Submited the form!");
}

export default function Form(){
    return(
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    );
}