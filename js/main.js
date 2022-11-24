
//Global Header that adds all the links to different pages for navigation
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<header id="header">
        <nav>
     
        
        
      <label class="title-Name">Enter The Metaverse</label>
        <ul>
      
          <li><a  href="index.php">Home</a></li>
          <li><a href="view_profile.php">View Profile</a></li>
          <li><a href="update_profile.php">Update Profile</a></li>
          
        </ul>
    </nav>
    </header>`
    }
}

customElements.define('my-header', MyHeader)

//Global Footer
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer id=footer>
        <p> Copyright &copy;2022 </p>
        <p>Metaverse</p>
        <p>Private Policy</p>

    </footer>`
    }
}

customElements.define('my-footer', MyFooter)