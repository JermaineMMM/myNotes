function showPage(page) {
    document.querySelectorAll('div').forEach(div => {
      div.style.display = 'none';
    });
    document.querySelector(`#${page}`).style.display = 'block';
  };

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('button').forEach(button => {
      button.onclick = function() {
        showPage(this.dataset.page);
      };
    });
  });
  
window.addEventListener("scroll", function() {
    if ((window.innerHeight + document.documentElement.scrollTop) >= document.body.offsetHeight) {
        document.body.style.backgroundColor = "#";
    }
    else{
        document.body.style.backgroundColor = "#";
    };
  });
  document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault();
	// your code to handle the form submission
  });
	document.querySelector("form").addEventListener("submit", () =>{
		event.preventDefault();
	});