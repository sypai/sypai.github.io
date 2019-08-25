
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/SiftSRT",
    "title": "About",
    "body": "&lt;!doctypehtml&gt;         "
    }, {
    "id": 2,
    "url": "http://localhost:4000/about",
    "title": "About",
    "body": "                About Me:                   Hey! I'm Suyash Bajpai. Welcome to my personal blog.                   I'm an undergraduate student in the department of Electronics &amp; Telecommunication Engineering at      Government Engineering College, Raipur, India.       I've a deep rooted interest in Mathematics and Electronics in general but what I absolutely love is computer programming      and knowing about the latest advancements in technology.               About Blog:                   My proposal for co-oCCur: High speed subtitle synchronization tool      has been accepted for Google Summer of Code, 2019 with the amazing organization -      CCExtractor Development. &#129321;      I will be spending my summer building it.         For the next several months, this will be the home for all the blog posts related to my GSoC project. I intend to post detailed accounts of what I learn, the obstacles I face and how I overcome them.     Please follow the blog for future updates! &#128578;   "
    }, {
    "id": 3,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                                             GSoC [00]: And now my watch begins!                              :               My proposal co-oCCur: High-speed subtitle synchronization has been accepted by CCExtractor Development for Google Summer of Code (GSoC) 2019! I am thrilled to bits to. . . :                                                                           19 May 2019            &#183;          3 min read                                                                                                              All Stories:                                                                                                     GSoC : Final Work Submission!               :       :                                                       23 Aug 2019            &#183;          1 min read                                                                                                                                               GSoC [02]: Basic needs fulfilled!               :       The first of the three phases of coding is about to end. And the evaluations for this phase start from 24th June. This post contains the synopsis of my work. . . :                                                       23 Jun 2019            &#183;          6 min read                                                                                                                                               GSoC [01]: Bonding period ends &amp; Coding begins!               :       A month-long community bonding period ended on 27 May, commencing the official coding period. In this post, I would like to share my GSoC 2019 community bonding experience with CCExtractor. . . :                                                       03 Jun 2019            &#183;          4 min read                                                                                                                                               GSoC [00]: And now my watch begins!              :       My proposal co-oCCur: High-speed subtitle synchronization has been accepted by CCExtractor Development for Google Summer of Code (GSoC) 2019! I am thrilled to bits to spend my summer working with. . . :                                                       19 May 2019            &#183;          3 min read                                                      "
    }, {
    "id": 5,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "http://localhost:4000/GSoC-1-Final-Work-Submission/",
    "title": "GSoC : Final Work Submission! ",
    "body": "2019/08/23 - "
    }, {
    "id": 7,
    "url": "http://localhost:4000/GSoC-02-Basic-needs-fulfilled!/",
    "title": "GSoC [02]: Basic needs fulfilled! ",
    "body": "2019/06/23 - The first of the three phases of coding is about to end. And the evaluations for this phase start from 24th June. This post contains the synopsis of my work during the first four weeks.        Where do we want to be? &#127768;: A question we need an answer to, before starting anything.  Let’s start with that. It won’t be fair if I talk a blue streak about what I have done without discussing what I want to do.  The project co-oCCur aims to address the issue: “misalignment of subtitles with the base audiovisual content”. There are two use cases that the project currently  aims to tackle leveraging two different approaches using  two tools, namely Tool A and Tool B.   My  proposal elucidates the approach of tackling both the cases and the architecture of both the tools in depth. In a nutshell, Tool A will use   audio-fingerprint  annotations while Tool B will create two strings (an audio string and a subtitle string), to detect a  constant temporal offset responsible for the misalignment.  Adjustment of the subtitles will be achieved by propagating a time delay in each of the caption entries in the subtitle document. The resulting subtitle document will have a different presentation time for each caption entry so that the audio and the subtitles co-oCCur. Tool A Use case: Synchronization of subtitles between two versions (for example, with and without commercials) of the same audiovisual content. It will take as input the original audiovisual content, the edited audiovisual content and the subtitles document of the original audiovisual content. Tool B Use case: Synchronization of subtitles between two versions of the same audiovisual content in the absence of the original content. It will take as input the modified audiovisual content and the subtitle document for the original audiovisual content. The whole project has been divided into modules and sub-modules. The function of each of which I have described  in my proposal in great detail. During the first coding  phase, I had decided to work on all the basic utility modules.         How's the Subtitle Synchronization coming along? ️️&#9203;: These were the proposed deliverables for the first evaluations.  I have also created a Trello board to make it easier for my mentor and myself, to keep a track of my progress. Project link:   github. com/sypai/co-oCCur    Trello:  trello. com/co-occursubtitlesynchronization  As I had mentioned in the   last post, my final examinations  started from the very same day the coding period began, which made  everything a bit cluttery in the first two weeks. I could not  devote the time I planned and needed to meet the deadlines. As a result, tasks were getting postponed. But somehow aftera few sleepless nights, lots of coffee and an endless loop ofgood music later, things have got on track, at least I feel so. Here are the tasks I checked off during the first coding phase: Sample Repository ✔️ The first task in hand was to collect samples, a lot of samples. I had mentioned this as a requirement in my proposal. I informed my mentor @cfsmp3 and he gave me access to a high-speed development server (gsocdev3) which has a huge sample collection. FFmpeg and CCExtractor are the tools I used to extract audio and subtitles &amp; collected them in a SampleRepository. For our project, the audio needs to have certain specifications. It needs to be uncompressed, raw PCM (16 bit-signed int), mono sampled at 16000 Hertz. Basic Architecture ✔️This is how the co-oCCur repo currently look like: Base64 encrypt and decrypt ✔️[Tool A] The fingerprints extracted from the audio will be 32-bit integer vectors and this is the form we will use while comparing them later. But in the subtitle document they will be stored as base64 strings. Task of converting these integer vectors to base64 strings and vice versahas been completed. SiftSRT ✔️SiftSRT: A complete subtitle parser and editor (Check it out!). Whatever our Tool A and Tool B require, related to subtitle files, SiftSRT has got it covered!.  1234567891011121314  SubtitleParserFactory *spf;  spf = new SubtitleParserFactory( inputSubtitle. srt );  SubtitleParser *parser;  parser = spf-&gt;getParser();  std::vector&lt;SubtitleItem *&gt; sub;  sub = parser-&gt;getSubtitles();    co_oCCurEditor *edit;  edit = new co_oCCurEditor(sub);   co_oCCurParser *parse;  parse = new co_oCCurParser(sub); AFInserter  [Tool A] Our audio fingerprinting library Dactylogram (Phase 2) will extract audio fingerprints annotations from the original audio and then they will be inserted into the original subtitle document as fingerprint anchors and create an enriched subtitle document. 1 edit-&gt;EnrichSRT( temp. srt , fingerprints, timestamps); AFSeeker [Tool A] For comparing our fingerprints extracted from modified audiowith the fingerprint anchors we will need the anchors. Our Subtitle parserwill give that. 12auto FPs = parse-&gt;getFingerprints();auto FPTime = parse-&gt;getFPTimestamps; Subtitle Segmentation [Tool B] As mentioned we need a subtitleString containing information about subtitles1 = Subtitle present in the window0 = No subtitle in the window12 int timeWindow = 10; auto substring = parse-&gt;SpeechActivityDetection(timeWindow); Subtitle Adjustment [Tool A][Tool B] The last step in both tools is adjusting the subtitle file using the constant temporal offset detected by respective algorithm. As we get the delay we propagate it to each caption entry. 1edit-&gt;AdjustSRT( example. srt , delay, true);VAD Implementation ✔️[Tool B] Out of the required two strings for alignment audioString contains informationof voice activity in a time window for the modified audio. This requires Voice Activity Detection. Google’s open-source WebRTC has a VADmodule which uses Gaussian Mixture Model (GMM). I have used that for creating ouraudioString. 1 = Subtitle present in the window0 = No subtitle in the window 12  std::vector&lt;int16_t&gt; samples = file-&gt;getSamples();  implementVAD(samples);       How does everything fall into place? 🧩: All the basic needs of the project have been fulfilled. The figures below describe the workflow of the Tools.  ✔️ represents which parts of the workflow have been completed.          Tool A :            Tool B :    Road ahead &#128739;: Now I will begin working on Dactylogram, the most interesting, challenging andpresumably time-taking part of the whole project. The goal is to developan audio fingerprinting library required for Tool A. In the workflow above, theblocks named AFExtractor &amp; Seeking would be the TO-DO for the second phase. All the best to all the participants for the first evaluations. I hope all of us pass with flying colors. 🤞 👍 See you on the other side! "
    }, {
    "id": 8,
    "url": "http://localhost:4000/GSoC-00-Bonding-period-ends-&-Coding-begins-!/",
    "title": "GSoC [01]: Bonding period ends & Coding begins! ",
    "body": "2019/06/03 - A month-long community bonding period ended on 27 May,commencing the official coding period. In this post, I wouldlike to share my GSoC 2019 community bonding experiencewith CCExtractor Development, work-progress and the roadahead.       Community Bonding Period: The official list of selected proposals was released by Google on the 6th of May and with it started the community bonding period. It began with me jumping for joy after getting the news of my proposal getting selected. It was basically a month full of learning and planning. Two social groups have been created, one on Facebook and the other on Telegram, which includes over 600 selected students from around the globe. It is a great platform for sharing your progress and getting help when you are stuck somewhere. Here are the tasks I checked off during the community period!    Deciding the structure of my projectThis is the first time I am going to be working on a project which involves so much! Deciding the structure of the projectearly was a crucial task so that the development stayssmooth ahead. I was sure to use C++ as the languageand thus I started off with strengthening the conceptsof the language. After checking out some popular C++projects and reading some blogs on the same I havedecided to use something like this:     Creating a Trello boardAs I had mentioned in my proposal I wanted to have adetailed checklist of the tasks to be done with their deadlines. This would help me and my mentor to keep track of my work. I am maintaining the milestones and deliverables in a Trello board, which can be found here :  Milestones and checklist for co-oCCur: High-speed subtitle synchronization tool      Setting-up my BlogFor everyone to follow my progress on the project I have set up this blog. This is the best way for the whole communityto know what’s cooking. It’s a simple and mediumish themed Jekyll blog hosted onGithub pages.  Here it resides: https://sypai. github. io     Setting-up Payoneer accountThere have been more discussions on this in the Telegram group than anything else. Fortunately, it took me around ten minutes to set it up and receive the confirmation email fromPayoneer.     Surprise &#127873; &#128217; : As mentioned in the CCExtractor’s website, This year we're going to try something new. All accepted students will get a programming book immediately after being accepted, with the hope that they read them before the coding starts. We want to see if this increases the quality of the work. Each of the accepted students was to choose a technical book of their choice. I chose Elements of Programming Interviews in Python by Adnan Aziz, Tsung-Hsien Lee and Amit Prakash. Placement season being next in the queue, this book is a very good addition to my library.  Thank you CCExtractor Development! 😍   Bad News &#128531;: My end semester exams have been postponed, this was known, I had mentioned this in my proposal. But the final schedule wasn’t announced until 20th May. Guess what! Exams started from the very same day the coding period officially began.   I had to re-schedule the weekly milestones and deadlines. I have informed my mentor regarding this and he says, as long as you are on track by the time of the first evaluation you're OK. But it would be a good idea to show me your progress often. It would be a bit of a predicament to manage to work with the exams. I hope by the end of first evaluation, I will able to complete all the deliverables.  Road Ahead! &#128739; : At the end of the first four weeks, first evaluation [24 May - 28 May] begins. I will try to stick to the deadlines as I have mentioned in the  trello  board. I know it is going to be a roller-coaster ride. I am sure I will learn a lot during the next 3 months! I wish all the participants a fun and a productive summer. Happy Coding! "
    }, {
    "id": 9,
    "url": "http://localhost:4000/Google-Summer-of-Code-And-now-my-watch-begins/",
    "title": "GSoC [00]: And now my watch begins!",
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