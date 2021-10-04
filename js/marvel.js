var marvel= {
   
    render: function(){
        var url="https://gateway.marvel.com/v1/public/characters?ts=1&apikey=afd8b767eb9385e3b0bb52e2cdf6f46b&hash=b46f52610db28335606c2e5e05a05dba";
        var message=document.getElementById("message");
        var footer=document.getElementById('footer')
        var marvelContainer= document.getElementById('marvel-container');
        $.ajax({
            url:url,
            type:'GET',
            beforeSend: function(){
                message.innerHTML="Please wait while we fetch data.....";
            },

            complete:function(){
                message.innerHTML="Successfully done!"
            },
            success:function(data ){
                var string="";
                string += "<div class='row'>";
                footer.innerHTML=data.attributionHTML;
                for (var i=0; i<data.data.results.length;i++){
                  
                    var element=data.data.results[i];
                    string += "<div class='col-md-3'>";
                    string += "<a href='"+ element.urls[0].url+ "'target='_blank'>"
                    string += " <img src='"+ element.thumbnail.path +"/portrait_fantastic."+ element.thumbnail.extension+
                    "' />";
                    string += "</a>"
                    string+="<h3>" + element.name + "</h3>";
                    string += "</div>";

                    if((i+1)% 4==0){
                        string += "</div>";
                        string += "<div class='row'>";
                    }
                }

                marvelContainer.innerHTML = string;

            },
            error:function(){
                message.innerHTML="We Apologize"
            }
        })
    }
} 
marvel.render();