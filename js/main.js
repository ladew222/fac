 var checkbox = document.querySelector('input[name=mode]');

        checkbox.addEventListener('change', function() {
            if(this.checked) {
                trans()
                document.documentElement.setAttribute('data-theme', 'dark')
            } else {
                trans()
                document.documentElement.setAttribute('data-theme', 'light')
            }
        })

        let trans = () => {
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition');
            }, 1000)
        }
		
		
$(document).ready(function() {
    $('input[type=checkbox][name=mode]').change(function() {
        if ($(this).prop("checked")) {
            //alert(`${this.value} is checked`);
			$(document.documentElement).attr("data-theme","dark");
        }
        else {
            //alert(`${this.value} is unchecked`);
			$(document.documentElement).attr("data-theme","light");
        }
    });
	
	$('.clickableList').click(function() {
		//event.preventDefault();
		
	});
});