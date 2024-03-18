"use client"

export default function Form() {
    const handleFocus = () => {
        console.log("Input is in focus!");
        
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert("You have submitted this form!")
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Enter your name:</label>
            <input type="text" id="name" onFocus={handleFocus}/>

            <label htmlFor="story">Enter your life story:</label>
            <textarea name="story" id="story" cols={30} rows={10} defaultValue="It was a dark and story night"></textarea>

            <button>Submit form</button>
        </form>
    )
}