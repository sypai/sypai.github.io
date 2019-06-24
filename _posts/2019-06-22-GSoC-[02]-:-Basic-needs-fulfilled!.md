---
layout: post
title:  "GSoC [02]: Basic needs fulfilled! "
author: syPai
categories: [ GSoC ]
image: assets/images/journey.jpg
comments: true
---

The first of the three phases of coding is about to end. And
 the evaluations for this phase start from 24th June.
This post contains the synopsis of my work during the
 first four weeks.

<!-- Where ?-->
 <div class="section-title margtop3rem">
             <h2><span>Where do we want to be? &#127768;</span></h2>
</div>

 A question we need an answer to, before starting anything. 
 Let's start with that. It won't be fair if I talk a blue streak 
 about *what I have* done without discussing *what I want to do*.
 <br />
 The project co-oCCur aims to address the 
 issue: "misalignment of subtitles with the base audiovisual
  content". There are two use cases that the project currently
   aims to tackle leveraging two different approaches using
    two tools, namely **Tool A** and **Tool B**. 
    My
 <a href="https://docs.google.com/document/d/1QEB3jDNvFVPP4OpvU1m_A3kME288LZKJVIs1g1AXin4/edit?usp=sharing">
  proposal
 </a>
 elucidates the approach of tackling both the cases and the 
 architecture of both the tools in depth. In a nutshell, 
 Tool A will use 
 <a href="https://en.wikipedia.org/wiki/Acoustic_fingerprint">
    audio-fingerprint 
  </a>
 annotations while Tool B will create two strings
  (an audio string and a subtitle string), to detect a 
  **_constant temporal offset_** responsible for the misalignment. 
 Adjustment of the subtitles will be achieved by propagating 
 a time delay in each of the caption entries in the subtitle 
 document. The resulting subtitle document will have a 
 different presentation time for each caption entry so that the
 audio and the subtitles **co-oCCur**.
 
 **Tool A** <br />
 Use case: Synchronization of subtitles between two versions 
 (for example, with and without commercials) 
 of the same audiovisual content. It will take as input the 
 original audiovisual content, the edited audiovisual content 
 and the subtitles document of the original audiovisual content.
 
 **Tool B** <br />
 Use case: Synchronization of subtitles between two versions
 of the same audiovisual content in the absence of the 
 original content. It will take as input the modified audiovisual 
 content and the subtitle document for the original 
 audiovisual content.
 
 The whole project has been divided into modules and
  sub-modules. The function of each of which I have described
   in my proposal in great detail. During the first coding 
   phase, I had decided to work on all the basic utility modules.
   
 <!-- How along ?-->
  <div class="section-title margtop3rem">
              <h2><span>How's the Subtitle Synchronization coming along? ️️&#9203;</span></h2>
 </div>
 
  <img class="featured-image img-fluid" src="{{ site.baseurl }}/assets/images/phase1_tasks.png" alt="Trello Board">
These were the proposed deliverables for the first evaluations. 
 I have also created a _Trello_ board  to make it easier for my mentor and myself, to keep a track of my progress.
 
 **_Project link_**:  <a href="https://github.com/sypai/co-oCCur" target="_blank">
   github.com/sypai/co-oCCur 
   </a><br />
   **_Trello_**: <a href="https://trello.com/b/JQGOK4Yo/co-occursubtitlesynchronization" target="_blank">
   trello.com/co-occursubtitlesynchronization
  </a><br />
  
  As I had mentioned in the 
  <a href="GSoC-00-Bonding-period-ends-&-Coding-begins-!/" target="_blank">
  last post</a>, my final examinations 
  started from the very same day the coding period began, which made 
  everything a bit cluttery in the first two weeks. I could not 
  devote the time I planned and needed to meet the deadlines.
 As a result, tasks were getting postponed. But somehow after
a few sleepless nights, lots of coffee and an endless loop of
good music later, things have got on track, at least I feel so.

Here are the tasks I checked off during the _first coding phase_: 

**Sample Repository** ✔️ <br />
The first task in hand was to collect samples, a lot of samples. 
I had mentioned this as a requirement in my proposal. 
I informed my mentor @<a href="https://github.com/cfsmp3">cfsmp3
</a>
 and he gave me access to 
a high-speed development server (gsocdev3) which has a 
huge sample collection. _FFmpeg_ and __*CCExtractor*__ are the 
tools I used to extract audio and subtitles & collected them 
in a `SampleRepository`. For our project, the audio needs to 
have certain specifications. It needs to be uncompressed, 
raw PCM (16 bit-signed int), mono sampled at 16000 Hertz.
<br />
<br />
<img class="featured-image img-fluid" src="{{ site.baseurl }}/assets/images/samplerepo.png" alt="Sample Repo">

**Basic Architecture** ✔️<br />
This is how the <a href="https://github.com/sypai/co-oCCur">co-oCCur</a> repo currently look like:
<br /><br />
<img class="featured-image img-fluid" src="{{ site.baseurl }}/assets/images/proj_structure.png" alt="Project tree">

**Base64 `encrypt` and `decrypt`** ✔️<br />
[`Tool A`] The fingerprints extracted from the audio will be 32-bit integer
 vectors and this is the form we will use while comparing them later.
But in the subtitle document they will be stored as base64 strings.
Task of converting these integer vectors to base64 strings and vice versa
has been completed.
<br />
<img class="featured-image img-fluid" src="{{ site.baseurl }}/assets/images/base64.png" alt="base64">

**SiftSRT** ✔️<br />
<a href="https://github.com/sypai/SiftSRT" target="_blank">
SiftSRT: A complete subtitle parser and editor
</a> (Check it out!).
Whatever our Tool A and Tool B require, related to subtitle files,
 SiftSRT has got it covered!. <br />
 ```cpp
    SubtitleParserFactory *spf;
    spf = new SubtitleParserFactory("inputSubtitle.srt");

    SubtitleParser *parser;
    parser = spf->getParser();

    std::vector<SubtitleItem *> sub;
    sub = parser->getSubtitles();
    
    co_oCCurEditor *edit;
    edit = new co_oCCurEditor(sub);
  
    co_oCCurParser *parse;
    parse = new co_oCCurParser(sub);
```

 * **AFInserter** <br /> 
 [`Tool A`] Our audio fingerprinting library __Dactylogram__ 
 (Phase 2) will extract audio fingerprints annotations from the original audio
 and then they will be inserted into the original subtitle 
 document as fingerprint anchors and 
 create an enriched subtitle document. 
 
  ```cpp
  edit->EnrichSRT("temp.srt", fingerprints, timestamps);
```

* **AFSeeker** <br />
[`Tool A`] For comparing our fingerprints extracted from modified audio
with the fingerprint anchors we will need the anchors. Our Subtitle parser
will give that.

```cpp
auto FPs = parse->getFingerprints();
auto FPTime = parse->getFPTimestamps;
```

* **Subtitle Segmentation** <br />
[`Tool B`] As mentioned we need a subtitleString containing information about subtitles
<br />`1 = Subtitle present in the window`
<br />`0 = No subtitle in the window`
 
 ```cpp
 int timeWindow = 10;
 auto substring = parse->SpeechActivityDetection(timeWindow);
 ```
 
 * **Subtitle Adjustment** <br />
 [`Tool A`][`Tool B`] The last step in both tools is adjusting the subtitle file 
 using the constant temporal offset detected by respective algorithm.
 As we get the `delay` we propagate it to each caption entry.
 
 ```cpp
edit->AdjustSRT("example.srt", delay, true);
```

**VAD Implementation** ✔️<br />
[`Tool B`] Out of the required two strings for alignment `audioString` contains information
of voice activity in a time window for the modified audio. 
This requires  **_Voice Activity Detection_**. Google's open-source 
<a href="https://webrtc.org/" target="_blank">WebRTC</a> has a VAD
module which uses Gaussian Mixture Model (GMM). I have used that for creating our
`audioString`.
<br />`1 = Subtitle present in the window`
<br />`0 = No subtitle in the window`
```cpp
    std::vector<int16_t> samples = file->getSamples();
    implementVAD(samples);
``` 

<!-- Fall into place -->
<div class="section-title margtop3rem">
              <h2><span>How does everything fall into place? 🧩</span></h2>
 </div>
 All the **_basic needs_** of the project have been fulfilled.  
 The figures below describe the workflow of the Tools. 
 ✔️ represents which parts of the workflow have been completed.
 
 <div class="section-title margtop3rem">
                <h3><span> Tool A </span></h3>
   </div>
 <img class="featured-image img-fluid" src="{{ site.baseurl }}/assets/images/Tool A (2).png" alt="Project tree">
  
  
  <div class="section-title margtop3rem">
                 <h3><span> Tool B </span></h3>
    </div>
   <img class="featured-image img-fluid" src="{{ site.baseurl }}/assets/images/Tool B (2).png" alt="Project tree">

 
 <div class="section-title margtop3rem">
 <h2><span>Road ahead &#128739;</span></h2>
 </div>
Now I will begin working on **_Dactylogram_**, the most interesting, challenging and
presumably time-taking part of the whole project. The goal is to develop
an audio fingerprinting library required for **Tool A**. In the workflow above, the
blocks named **_AFExtractor_** & **_Seeking_** would be the `TO-DO` for the 
second phase.
<br /><br />
All the best to all the participants for the first evaluations. 
I hope all of us pass with flying colors. &#129310; &#128077;
<br /> <br />
See you on the other side! 
 
 
 


