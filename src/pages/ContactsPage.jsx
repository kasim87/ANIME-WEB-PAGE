export function ContactsPage(){
    return <div className="contact_page">
        <h1>Contact Us</h1>
        <h3>If you have any questions or suggestions, feel free to reach out to me!</h3>
        <form action="">
            <input type="text"  placeholder="Your Name"/>
            <input type="text"  placeholder="Your Email"/>
            <textarea rows="5" placeholder="Commetary"></textarea>
            <button>Submit</button>
        </form>
    </div>
}

