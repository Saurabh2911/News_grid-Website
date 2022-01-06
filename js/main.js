  // Sticky menu background
  window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      document.querySelector('#main-nav').style.opacity = 0.9;
    } else {
      document.querySelector('#main-nav').style.opacity = 1;
    }
  });

  // For Live page
        function getnews()
        {
            
            $(".posts").text("");
            var keyword= $("#keyword").val();

            if(keyword=='')
            {
                keyword="sport";
            }
            var url="https://newsapi.org/v2/everything?q="+keyword+"&apiKey=3ea8a56145884e1a8268ba076cf2e8f0" ;
            $("#load").show();
            $.get(url,(reponse) => {
            $("#load").hide();
            console.log(reponse.articles[0]);
            for (let i = 0; i < reponse.articles.length; i++) {

                var html=`<div class="card m-3 shadow">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${reponse.articles[i].urlToImage}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${reponse.articles[i].title}</h5>
                <p class="card-text">${reponse.articles[i].content.slice(0, 201)}</p>
                <p class="card-text"><small class="text-muted">${reponse.articles[i].publishedAt} | ${reponse.articles[i].source.name} - ${reponse.articles[i].author}</small></p>
            <a href="${reponse.articles[i].url}" target="_blank" class="btn btn-secondary">Read More</a>
            <p></p>
              </div>
            </div>
          </div>
        </div>`;

        $(".posts").append(html);
                
            }
        });
        }

