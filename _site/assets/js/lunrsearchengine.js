
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
    "body": "      Featured:                                                                                                                                                                                                                                   GSoC [00]: And now my watch begins!                              :               My proposal co-oCCur: High-speed subtitle synchronization has been accepted by CCExtractor Development for Google Summer of Code (GSoC) 2019! I am thrilled to bits to. . . :                                                                           19 May 2019            &#183;          3 min read                                                                                                              All Stories:                                                             Subtitle Resync: Using Audio fingerprinting to synchronize subtitles              :       Closed Captions (CC) and subtitles enhance an audiovisual content by providing speech information and description of representative events in a textual format. Captioning is especially used as an aid for. . . :                                                       28 Aug 2019            &#183;          5 min read                                                                                                                                               GSoC : Final Work Submission!               :       Surreal! My first Google Summer of Code has now come to an end. After almost 5 months (including the research pre-GSoC) it’s time to pack up. This has been a. . . :                                                       25 Aug 2019            &#183;          7 min read                                                                                                                                               GSoC [02]: Basic needs fulfilled!               :       The first of the three phases of coding is about to end. And the evaluations for this phase start from 24th June. This post contains the synopsis of my work. . . :                                                       23 Jun 2019            &#183;          6 min read                                                                                                                                               GSoC [01]: Bonding period ends &amp; Coding begins!               :       A month-long community bonding period ended on 27 May, commencing the official coding period. In this post, I would like to share my GSoC 2019 community bonding experience with CCExtractor. . . :                                                       03 Jun 2019            &#183;          4 min read                                                                                                                                               GSoC [00]: And now my watch begins!              :       My proposal co-oCCur: High-speed subtitle synchronization has been accepted by CCExtractor Development for Google Summer of Code (GSoC) 2019! I am thrilled to bits to spend my summer working with. . . :                                                       19 May 2019            &#183;          3 min read                                                      "
    }, {
    "id": 5,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "http://localhost:4000/Subtitle-Resync/",
    "title": "Subtitle Resync: Using Audio fingerprinting to synchronize subtitles",
    "body": "2019/08/28 - Closed Captions (CC) and subtitles enhance an audiovisual content by providing speech information and description of representative events in a textual format. Captioning is especially used as an aid for people with hearing loss or deafness, but it’s useis definitely not limited to that domain. For instance, it is frequently the case that captions are necessaryto watch a TV show in a noisy surrounding or when one is not familiar with the language or accentavailable in the audio streams. For an ideal subtitle file, the subtitles are perfectly aligned with the base audiovisual content. For subtitles to align their timing must align with the corresponding sequence in the audiovisual content. There is a very common case in which we have an audiovisual content with some parts of the previousepisode, a lot of commercials throughout and some seconds of the next episode. More commonly a . ts, a transportstream file involves such use case. The subtitles extracted from it will contain the subtitle for all the parts including the commercials. Now we don’t ever use such videos instead we prefer clean recordings devoid of any commercials or breaks in it. Now using the original subtitles will result in a horrible experience causing a sustained exasperationto the user. The tool Subtitle Resync takes in the two versions of the same audiovisualcontent, the subtitle file for the original video and generates a subtitle filewhich is perfectly in-sync with the clean recording. The tool takes about 25 secondsto create a synced subtitle file so that the viewer does not have any burden before the funstarts.      https://github. com/sypai/co-oCCur          Why audio fingerprinting? : There is lot already written and discussed over the internet on what is audio fingerprinting. To startwith,here is what wikipedia has to say. An acoustic fingerprint is a condensed digital summary, a fingerprint, deterministically generated from an audio signal, that can be used to identify an audio sample.  Practical uses of acoustic fingerprinting include identifying songs, melodies, tunes etc. YES! this is what the magical  Shazam uses to recognize a song from the cosmic corpus of audio.  Our project uses  chromaprint, an open source audio fingerprinting library. It works with spectrograms, which are visual representations of the spectrum of frequencies in a sound as these vary with time.  Chromaprint converts the input audio to the sampling rate of 11025 Hertz and using a FFT(Fast Fourier Transform) window size of 4096 with a 2/3 overlap. The algorithm behind chromaprint is complex. Nevertheless, the audio fingerprint are array of 32-bit integers. These are hashes of some arbitrary audio features over a short period of time. A new hash is generated every 0. 1238 seconds and each hash covers 2. 6 seconds of audio. The audio fingerprints look like this: 123 array([3208039586, 3207744690, 3207744642, 3177323714, 3187031106,        2650221586, 2650025010, 2683053106, 2682795042, 2594778150,        2594909479, 2594782997, 2594709188, 2326298244])The further processing of these audio fingerprints rarely deal with them in this form,  instead it can be thought of as a 2D black-and-white image. Black is a 0 bit and white is a 1 bit.        Testing the Tool : For testing the tool, I have used a server which was provided to me by my organizationwhich has a ample amount of samples. Quantitatively speaking, to test the tool’s speedand accuracy I have used 16 different valid sample files. Out of the files usedI have got accurate results for 14 samples, 1 sample gave a partial result (perfect results upto 75% of the video) and a sample on whichthe tool fails to work. Moreover, it takes an average 26. 5 seconds to produce the results. The reason behind the 2 failing results is the section which decides on the basisof comparison results of fingerprints whether it’s a match, a local match or a no match.         What can be improved? :  The project over the course of time will keep improving. The improvements that I would like to make in the near future are:  Currently for the computation of FFT, I have used kissFFT, a lightweight easy to use open source library.  I would like to to replace it with FFmpeg’s FFT functions which would make the fingerprint generation process faster.  The final steps of deciding the match results definitely are to be improved. As mentioned in the Testing  section there are a few cases which are not producing results due to the wrong deduction. Also, contribution of any kind is more than welcome. If you have any idea or an issue feel free to open a PR or an issuein the project repository.         Conclusion :  I have developed this project during Google Summer of Code, 2019 which I was fortunate to participate in under CCExtractor Development. Obviously a lot more can be done on this but I am glad that finally I have an open source project. I am grateful to my mentor  Carlos Fernandez Sanz who gave me this opportunity and helped me throughout my journey.   I hope that anyone reading this will check out the co-oCCur project and drop a few starts on me, or better yet, fork it!     https://github. com/sypai/co-oCCur     So long! "
    }, {
    "id": 7,
    "url": "http://localhost:4000/GSoC-Final-work-submissions/",
    "title": "GSoC : Final Work Submission! ",
    "body": "2019/08/25 - Surreal! My first Google Summer of Code has now come to an end. After almost 5 months(including the research pre-GSoC) it’s time to pack up. This has been a journey full of learning. This post is to serve the purpose of the final report for the work I have done during the summer.       Important links &#9939;:    Project repository   co-oCCur @ Github     Milestone &amp; deliverable Board  co-oCCur @ Trello      Project proposal   co_oCCur/gsoc_19_ccx_proposal     Mentor Carlos Fernandez Sanz @ Github     OrganizationCCExtractor Development        co-oCCur: High-speed subtitle synchronization : For an ideal subtitle file, the subtitles are perfectly aligned with the base audiovisual content. In other words, the audio and the corresponding subtitles co-oCCur. The misalignment of the subtitle files is the underlying problem that this project aims to solve so that the viewer does not have any burden before the fun starts (this is what matters). Tool A Use case: Synchronization of subtitles between two versions (with and without commercials) of the same audiovisual content. It takes as input the original audiovisual content, the edited audiovisual content and the subtitles document of the original audiovisual content. Tool B Use case: Synchronization of subtitles between two versionsof the same audiovisual content in the absence of the originalcontent. It takes as input the modified audiovisual contentand the subtitle document for the original audiovisual content.       What has been done? : The whole project had been divided into modules and sub-modules. Can be seen in the   Trello board, the function of each of which I have described in my    proposal  in great detail. SiftSRT ✔️SiftSRT: A complete subtitle parser and editor (Check it out!). Whatever our Tool A and Tool B require, related to subtitle files,SiftSRT has got it covered!.  Dactylogram ✔️The complete  audio-fingerprinting solution for Tool A, usingchromaprint . Audio Segmentation ✔️ Determination of presence of speech in an audio using webrtc for Tool B. Alignment Algorithms ️    Tool A  ✔ Internally, the audio fingerprints that dactylogram generates are array of 32-bit integer. We don’t really work with them in this  form, but the hashes look something like this:   1234 array([3594440902, 3594416326, 3598545270, 3598528806, 3615303462, 3615435574, 3589233430, 3589233495, 3622787783, 3622794949, 3623867085, 3623862925, 3623867357, 3590189549, 3573346669, 2499605615, 2498559022, 2490230894, 2490230910, 2490362974])    These fingerprints are treated usually on bit level. So it’s more useful to think of the  fingerprint as a 2D black-and-white image where each white  represents a 1 bit and each black pixel is a 0 bit:     We use a small subset of bits from the hashes and cross-match the two fingerprints. For each hash that appears in both fingerprints, we will calculate the difference of offsets  at which they appear in the fingerprints. We will build a histogram  of these offset differences, do some filtering  (effectively estimating a density function using gaussian kernels) and find peaks in it.  The peaks will tell us how do we need to align the two fingerprints  to find matching segments in them.      Using the alignment algorithm our tool detects the multiple segments in the original file, separating the actual audiovisual content and the commercials. Once the segments are identified we use SiftSRT to edit the subtitle document and create a perfectly aligned subtitle file.     Tool B  For this tool we have two strings containing speech information. 1 represents the presence of speech in th 10ms window while the absence of speech is represented by 0; The proposed algorithm for this tool, in n simple terms, for each offset, will take a dot product of one string with the offset version of the other. Computing this naively would result in an O (n^2)​ solution. And “High speed is really a priority” is clearly mentioned in the project’s idea page. ​ ​ So, we will use the Fast Fourier Transform (FFT), bringing the complexity down to​ ​ O(n log n)​ . We will score the alignment based on the number of matching 1’s i. e. the summation at all values of time of the product of both the strings, This is ​ Convolution​. So we can rephrase this problem as,  find the index τ which maximizes the value of the convolution of the sequences This has been successfully developed but it has not produced results.        Where do we stand? : At this point, we have a perfectly working Tool A, capable of doing exactly what it is supposed to do.  Installation  Clone the repository from  co-oCCur @ Github   1 git clone https://github. com/sypai/co-oCCur    Navigate to install directory and run build. sh:  12 cd install . /build. sh    The tool is now ready to use!  Usage For a complete list of options and parameters, pleasego through the project’s   README  .  Sync!  1  . /co_oCCur -tool [tool options] &lt;tool specific arguments&gt;       Tool A  1 . /co_oCCur -t A -o /path/to/original/audio. wav -m /path/to/modified/audio. wav -s /path/to/original/subtitle. srt     What will this trigger?      Set Tool A to be used for synchronization.    Read the two audio files and generate audio fingerprints for both of them.    Using the alignment algorithm for Tool A, detect the different segments.    Use the information on segments edit the original subtitle file.    Produce a synchronized subtitle file, co_oCCur-original. srt.     See it in action:     Tool B  1  . /co_oCCur -t B -o /path/to/modified/audio. wav -s /path/to/original/subtitle. srt     What happens next?      Set B as the tool to be used for synchronization.    Read the audio file and create the audio string.    Parse the subtitle file and create the subtitle string.    Using the alignment algorithm for Tool B, detect the different blocks.    Use the information on segments edit the original subtitle file.    Produce a synchronized subtitle file, co_oCCur-original. srt.          What else can been done? : The project is in it’s early stage and will keep evolving. The available functions, usage instructions et cetera are expected to refactor over time. There are several ideas and features that can be added to this project.  Currently only SRT is the subtitle format that this project supports. Support for other formats can be added.  The misalignment of subtitles because of different encoding settings in videos causes a varying temporal offset. This isalso a great feature to add in to our project. Also, contribution of any kind is more than welcome. Feel free to raise an issue tracker here:  here  .       GSoC: Endgame : Before the final goodbyes, I would like to thank my mentor, Carlos Fernandez Sanz for accepting my proposal, providing guidance whenever I asked, and believing in me when things didn’t go as intended. I am grateful. Shout out to the CCExtractor community for being so welcoming and supportive. I am fortunate to be a part of the CCExtractor Development End? No, the journey doesn’t end here, it begins. . I’m sure I will stick around as a regular contributor.  I pledge my life and honor to the Night's Watch, for this night and all the nights to come.  "
    }, {
    "id": 8,
    "url": "http://localhost:4000/GSoC-02-Basic-needs-fulfilled!/",
    "title": "GSoC [02]: Basic needs fulfilled! ",
    "body": "2019/06/23 - The first of the three phases of coding is about to end. And the evaluations for this phase start from 24th June. This post contains the synopsis of my work during the first four weeks.        Where do we want to be? &#127768;: A question we need an answer to, before starting anything.  Let’s start with that. It won’t be fair if I talk a blue streak about what I have done without discussing what I want to do.  The project co-oCCur aims to address the issue: “misalignment of subtitles with the base audiovisual content”. There are two use cases that the project currently  aims to tackle leveraging two different approaches using  two tools, namely Tool A and Tool B.   My  proposal elucidates the approach of tackling both the cases and the architecture of both the tools in depth. In a nutshell, Tool A will use   audio-fingerprint  annotations while Tool B will create two strings (an audio string and a subtitle string), to detect a  constant temporal offset responsible for the misalignment.  Adjustment of the subtitles will be achieved by propagating a time delay in each of the caption entries in the subtitle document. The resulting subtitle document will have a different presentation time for each caption entry so that the audio and the subtitles co-oCCur. Tool A Use case: Synchronization of subtitles between two versions (for example, with and without commercials) of the same audiovisual content. It will take as input the original audiovisual content, the edited audiovisual content and the subtitles document of the original audiovisual content. Tool B Use case: Synchronization of subtitles between two versions of the same audiovisual content in the absence of the original content. It will take as input the modified audiovisual content and the subtitle document for the original audiovisual content. The whole project has been divided into modules and sub-modules. The function of each of which I have described  in my proposal in great detail. During the first coding  phase, I had decided to work on all the basic utility modules.         How's the Subtitle Synchronization coming along? ️️&#9203;: These were the proposed deliverables for the first evaluations.  I have also created a Trello board to make it easier for my mentor and myself, to keep a track of my progress. Project link:   github. com/sypai/co-oCCur    Trello:  trello. com/co-occursubtitlesynchronization  As I had mentioned in the   last post, my final examinations  started from the very same day the coding period began, which made  everything a bit cluttery in the first two weeks. I could not  devote the time I planned and needed to meet the deadlines. As a result, tasks were getting postponed. But somehow aftera few sleepless nights, lots of coffee and an endless loop ofgood music later, things have got on track, at least I feel so. Here are the tasks I checked off during the first coding phase: Sample Repository ✔️ The first task in hand was to collect samples, a lot of samples. I had mentioned this as a requirement in my proposal. I informed my mentor @cfsmp3 and he gave me access to a high-speed development server (gsocdev3) which has a huge sample collection. FFmpeg and CCExtractor are the tools I used to extract audio and subtitles &amp; collected them in a SampleRepository. For our project, the audio needs to have certain specifications. It needs to be uncompressed, raw PCM (16 bit-signed int), mono sampled at 16000 Hertz. Basic Architecture ✔️This is how the co-oCCur repo currently look like: Base64 encrypt and decrypt ✔️[Tool A] The fingerprints extracted from the audio will be 32-bit integer vectors and this is the form we will use while comparing them later. But in the subtitle document they will be stored as base64 strings. Task of converting these integer vectors to base64 strings and vice versahas been completed. SiftSRT ✔️SiftSRT: A complete subtitle parser and editor (Check it out!). Whatever our Tool A and Tool B require, related to subtitle files, SiftSRT has got it covered!.  1234567891011121314  SubtitleParserFactory *spf;  spf = new SubtitleParserFactory( inputSubtitle. srt );  SubtitleParser *parser;  parser = spf-&gt;getParser();  std::vector&lt;SubtitleItem *&gt; sub;  sub = parser-&gt;getSubtitles();    co_oCCurEditor *edit;  edit = new co_oCCurEditor(sub);   co_oCCurParser *parse;  parse = new co_oCCurParser(sub); AFInserter  [Tool A] Our audio fingerprinting library Dactylogram (Phase 2) will extract audio fingerprints annotations from the original audio and then they will be inserted into the original subtitle document as fingerprint anchors and create an enriched subtitle document. 1 edit-&gt;EnrichSRT( temp. srt , fingerprints, timestamps); AFSeeker [Tool A] For comparing our fingerprints extracted from modified audiowith the fingerprint anchors we will need the anchors. Our Subtitle parserwill give that. 12auto FPs = parse-&gt;getFingerprints();auto FPTime = parse-&gt;getFPTimestamps; Subtitle Segmentation [Tool B] As mentioned we need a subtitleString containing information about subtitles1 = Subtitle present in the window0 = No subtitle in the window12 int timeWindow = 10; auto substring = parse-&gt;SpeechActivityDetection(timeWindow); Subtitle Adjustment [Tool A][Tool B] The last step in both tools is adjusting the subtitle file using the constant temporal offset detected by respective algorithm. As we get the delay we propagate it to each caption entry. 1edit-&gt;AdjustSRT( example. srt , delay, true);VAD Implementation ✔️[Tool B] Out of the required two strings for alignment audioString contains informationof voice activity in a time window for the modified audio. This requires Voice Activity Detection. Google’s open-source WebRTC has a VADmodule which uses Gaussian Mixture Model (GMM). I have used that for creating ouraudioString. 1 = Subtitle present in the window0 = No subtitle in the window 12  std::vector&lt;int16_t&gt; samples = file-&gt;getSamples();  implementVAD(samples);       How does everything fall into place? 🧩: All the basic needs of the project have been fulfilled. The figures below describe the workflow of the Tools.  ✔️ represents which parts of the workflow have been completed.          Tool A :            Tool B :    Road ahead &#128739;: Now I will begin working on Dactylogram, the most interesting, challenging andpresumably time-taking part of the whole project. The goal is to developan audio fingerprinting library required for Tool A. In the workflow above, theblocks named AFExtractor &amp; Seeking would be the TO-DO for the second phase. All the best to all the participants for the first evaluations. I hope all of us pass with flying colors. 🤞 👍 See you on the other side! "
    }, {
    "id": 9,
    "url": "http://localhost:4000/GSoC-00-Bonding-period-ends-&-Coding-begins-!/",
    "title": "GSoC [01]: Bonding period ends & Coding begins! ",
    "body": "2019/06/03 - A month-long community bonding period ended on 27 May,commencing the official coding period. In this post, I wouldlike to share my GSoC 2019 community bonding experiencewith CCExtractor Development, work-progress and the roadahead.       Community Bonding Period: The official list of selected proposals was released by Google on the 6th of May and with it started the community bonding period. It began with me jumping for joy after getting the news of my proposal getting selected. It was basically a month full of learning and planning. Two social groups have been created, one on Facebook and the other on Telegram, which includes over 600 selected students from around the globe. It is a great platform for sharing your progress and getting help when you are stuck somewhere. Here are the tasks I checked off during the community period!    Deciding the structure of my projectThis is the first time I am going to be working on a project which involves so much! Deciding the structure of the projectearly was a crucial task so that the development stayssmooth ahead. I was sure to use C++ as the languageand thus I started off with strengthening the conceptsof the language. After checking out some popular C++projects and reading some blogs on the same I havedecided to use something like this:     Creating a Trello boardAs I had mentioned in my proposal I wanted to have adetailed checklist of the tasks to be done with their deadlines. This would help me and my mentor to keep track of my work. I am maintaining the milestones and deliverables in a Trello board, which can be found here :  Milestones and checklist for co-oCCur: High-speed subtitle synchronization tool      Setting-up my BlogFor everyone to follow my progress on the project I have set up this blog. This is the best way for the whole communityto know what’s cooking. It’s a simple and mediumish themed Jekyll blog hosted onGithub pages.  Here it resides: https://sypai. github. io     Setting-up Payoneer accountThere have been more discussions on this in the Telegram group than anything else. Fortunately, it took me around ten minutes to set it up and receive the confirmation email fromPayoneer.     Surprise &#127873; &#128217; : As mentioned in the CCExtractor’s website, This year we're going to try something new. All accepted students will get a programming book immediately after being accepted, with the hope that they read them before the coding starts. We want to see if this increases the quality of the work. Each of the accepted students was to choose a technical book of their choice. I chose Elements of Programming Interviews in Python by Adnan Aziz, Tsung-Hsien Lee and Amit Prakash. Placement season being next in the queue, this book is a very good addition to my library.  Thank you CCExtractor Development! 😍   Bad News &#128531;: My end semester exams have been postponed, this was known, I had mentioned this in my proposal. But the final schedule wasn’t announced until 20th May. Guess what! Exams started from the very same day the coding period officially began.   I had to re-schedule the weekly milestones and deadlines. I have informed my mentor regarding this and he says, as long as you are on track by the time of the first evaluation you're OK. But it would be a good idea to show me your progress often. It would be a bit of a predicament to manage to work with the exams. I hope by the end of first evaluation, I will able to complete all the deliverables.  Road Ahead! &#128739; : At the end of the first four weeks, first evaluation [24 May - 28 May] begins. I will try to stick to the deadlines as I have mentioned in the  trello  board. I know it is going to be a roller-coaster ride. I am sure I will learn a lot during the next 3 months! I wish all the participants a fun and a productive summer. Happy Coding! "
    }, {
    "id": 10,
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