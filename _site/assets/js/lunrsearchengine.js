
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About",
    "body": "                About Me:                   Hey! I'm Suyash Bajpai. Welcome to my personal blog.                   I'm an undergraduate student in the department of Electronics &amp; Telecommunication Engineering at      Government Engineering College, Raipur, India.       I've a deep rooted interest in Mathematics and Electronics in general but what I absolutely love is computer programming      and knowing about the latest advancements in technology.               About Blog:                   My proposal for co-oCCur: High speed subtitle synchronization tool      has been accepted for Google Summer of Code, 2019 with the amazing organization -      CCExtractor Development. &#129321;      I will be spending my summer building it.         For the next several months, this will be the home for all the blog posts related to my GSoC project. I intend to post detailed accounts of what I learn, the obstacles I face and how I overcome them.     Please follow the blog for future updates! &#128578;   "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                           All Stories:                                                                                                     Google Summer of Code, Week 1: The Beginning!              :       :                                                       01 Jun 2019            &#183;  &lt;span class= reading-time post-date title= Estimated read time &gt;        1 min read        &lt;/span&gt;                                                                                                                                       Google Summer of Code: And now my watch begins!              :       My proposal co-oCCur: High-speed subtitle synchronization has been accepted by CCExtractor Development for Google Summer of Code (GSoC) 2019! I am thrilled to bits to spend my summer working with. . . :                                                       19 May 2019            &#183;  &lt;span class= reading-time post-date title= Estimated read time &gt;        3 min read        &lt;/span&gt;                                              "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/GSoC-Week1-The-Beginning/",
    "title": "Google Summer of Code, Week 1: The Beginning!",
    "body": "2019/06/01 - "
    }, {
    "id": 6,
    "url": "http://localhost:4000/Google-Summer-of-Code-The-journey-begins/",
    "title": "Google Summer of Code: And now my watch begins!",
    "body": "2019/05/19 - My proposal co-oCCur: High-speed subtitle synchronization has been accepted by CCExtractor Development for Google Summer of Code (GSoC) 2019!  I am thrilled to bits to spend my summer working with the “magicians” behind the de-facto subtitle tool - CCExtractor. My mentor is Carlos Fernandez Sans (org admin, who originally built CCExtractor). What more could one ask for?       About GSoC:     Simply put, it is an international annual program by Google aimed at promoting Open Source Software development among college and university students. Students apply for a project/idea of their choice to one of the many Open Source Organizationsselected by Google, by submitting a proposal. Selected students spend their summer building the project by implementing what they proposed. In return, the students gain excellent experience of building a real-world project, mentored by seasoned developers. The stipend 💰 and of course the bragging rights! 😎       About my project:     Out of the many ideas, present in the CCExtractor’s GSoC page, I gravitated to Writing high-Speed subtitle synchronization tool. After about a month of research on the same, I submitted my proposal on the 9th of April. Here is my accepted proposal! Closed Captions (CC) and subtitles enhance audiovisual content by providing speech information and description of representative events in a textual format.  Captioning is especially used as an aid for people with hearing loss or deafness, but its use is definitely not limited to that domain.  For instance, it is frequently the case that captions are necessary to watch a TV show in a noisy surrounding or when one is not familiar with the language or accent available in the audio streams.  Downloading a subtitle document and playing it alongside an episode of your favourite TV show, is not rocket science, but it sure can feel that way sometimes. Getting the subtitle document that gives satisfactory synchronization on the first attempt is like hitting the jackpot. I know the annoyance that comes in with misaligned subtitles and is a very general problem.  For an ideal subtitle file, the subtitles are perfectly aligned with the base audiovisual content. In other words, the audio and the corresponding subtitles co-oCCur. The misalignment of the subtitle files is the underlying problem that this project aims to solve so that the viewer does not have any burden before the fun starts (this is what matters).  For the next 3 months, I will be working on this amazing project. I hope by the end of this summer the tool is ready to be used!  Every skill you acquire, doubles your odds of success Scott Adams"
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});