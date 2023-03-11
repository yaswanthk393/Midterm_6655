fetch("https://upadhayay.github.io/db.json")
                .then(function (response) {
                  return response.json();
                })
                .then(function (db) {
                  let placeholder = document.querySelector(".blogs_container");
                  let out = "";
                 /* var lst = [
                    "https://einsteinpapers.press.princeton.edu/vol4-trans/314#",
                    "https://einsteinpapers.press.princeton.edu/vol4-trans/202",
                    "https://einsteinpapers.press.princeton.edu/vol4-trans/204",
                    "https://einsteinpapers.press.princeton.edu/vol4-trans/318",
                    "https://einsteinpapers.press.princeton.edu/vol2-trans/186",
                  ];*/
                  
                  for (let i = 0; i < db.books.length; i++) {
                    //alert(':::'+lst[i]);

                    out += `
                        <div class="blog_box">
                                        
                            <h2>Title:${db.books[i].title}</h2>
                            <p>Published: ${db.books[i].published}</p>
                            <p>Year: ${db.books[i].year}</p>
                                            
                            <a href="#" target ="_blank"," class="read_more">Read More</a>
                                           
                        </div>
                        `;
                  }

                  placeholder.innerHTML = out;
                });