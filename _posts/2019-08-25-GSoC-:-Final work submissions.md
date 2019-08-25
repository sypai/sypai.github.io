---
layout: post
title:  "GSoC : Final Work Submission! "
author: syPai
categories: [ GSoC ]
image: assets/images/final_gsoc.png
comments: true
---
My first Google Summer of Code has now come to an end. It has been a
surreal experience for me. 

<div class="section-title margtop3rem">
            <h2><span>Important links &#9939;</span></h2>
 </div>
 
 - **Project repository**  <br/>
 <a href="https://github.com/sypai/co-oCCur" target="_blank">
     co-oCCur @ Github
   </a>
   
   
  - **Milestone & deliverable Board**<br/>
  <a href="https://trello.com/b/JQGOK4Yo/co-occursubtitlesynchronization" target="_blank">
      co-oCCur @ Trello
  </a>
  
  
  - **Project proposal**<br/>
  <a href="https://github.com/sypai/gsoc_19_ccx_proposal/" target="_blank">
        co_oCCur/gsoc_19_ccx_proposal
    </a>

- **Mentor**<br/>
 <a href="https://github.com/cfsmp3" target="_blank">
  Carlos Fernandez Sanz @ Github 
  </a>
  
- **Organization**<br/>
<a href="https://ccextractor.org/" target="_blank">
  CCExtractor Development
  </a>
  
<div class="section-title margtop3rem">
            <h2><span>co-oCCur: High-speed subtitle synchronization </span></h2>
</div>
For an ideal subtitle file, the subtitles are perfectly aligned with
 the base audiovisual content. In other words, the audio and the
 corresponding subtitles co-oCCur. 
The misalignment of the subtitle files is the underlying problem
 that this project aims to solve so that the viewer does not have 
any burden before the fun starts (this is what matters).

**Tool A** <br/>
Use case: Synchronization of subtitles between two versions
 (with and without commercials) of the same 
 audiovisual content. It takes as input the original audiovisual 
 content, the edited audiovisual content and the subtitles 
 document of the original audiovisual content.<br />
**Tool B** <br/>
Use case: Synchronization of subtitles between two versions
of the same audiovisual content in the absence of the original
content. It takes as input the modified audiovisual content
and the subtitle document for the original audiovisual content.
 
<div class="section-title margtop3rem">
            <h2><span>What has been done? </span></h2>
</div>

The whole project had been divided into modules and sub-modules.
Can be seen in the
<a href="https://trello.com/b/JQGOK4Yo/co-occursubtitlesynchronization" target="_blank">
      Trello
  </a>
board, the function of each of which I have described in my 
  <a href="https://github.com/sypai/gsoc_19_ccx_proposal/" target="_blank">
     proposal
    </a>
in great detail.


**SiftSRT** ✔️<br />
<a href="https://github.com/sypai/SiftSRT" target="_blank">
SiftSRT: A complete subtitle parser and editor
</a> (Check it out!).
Whatever our Tool A and Tool B require, related to subtitle files,
SiftSRT has got it covered!. <br />

**Dactylogram** ✔️<br />
The complete 
 <a href="https://en.wikipedia.org/wiki/Acoustic_fingerprint" target="_blank">
  audio-fingerprinting 
</a>
 solution for _Tool A_, using
<a href="https://github.com/acoustid/chromaprint" target="_blank">
chromaprint
 </a>.
 
 **Audio Segmentation** ✔️<br />
 Determination of presence of speech in an audio using
 <a href="https://webrtc.org/" target="_blank">
 webrtc
 </a> for _Tool B_.
 
  **Alignment Algorithms** ️<br />
 - **Tool A**   ✔<br/>
  Internally, the audio fingerprints that dactylogram generates are
  array of 32-bit integer. We don't really work with them in this 
  form, but the hashes look something like this:
     
   ```python
    array([3594440902, 3594416326, 3598545270, 3598528806, 3615303462,
     3615435574, 3589233430, 3589233495, 3622787783, 3622794949,
     3623867085, 3623862925, 3623867357, 3590189549, 3573346669,
     2499605615, 2498559022, 2490230894, 2490230910, 2490362974])
   ```
    
   These fingerprints are treated usually on bit level. So it's more useful to think of the 
  fingerprint as a 2D black-and-white image where each white 
  represents a 1 bit and each black pixel is a 0 bit:
  
   <img class="featured-image img-fluid" src="{{ site.baseurl }}/assets/images/fp.png" alt="fp-2D">     
 
   We use a small subset of bits from the hashes and
  cross-match the two fingerprints. For each hash that appears
  in both fingerprints, we will calculate the difference of offsets 
  at which they appear in the fingerprints. We will build a histogram 
  of these offset differences, do some filtering 
  (effectively estimating a density function using gaussian kernels) and find peaks in it.
  The peaks will tell us how do we need to align the two fingerprints 
  to find matching segments in them. 
  
    <img class="featured-image img-fluid" src="{{ site.baseurl }}/assets/images/peaks.png" alt="peaks"> 
  
   Using the alignment algorithm our tool detects the multiple segments
  in the original file, separating the actual audiovisual content and the commercials.
  Once the segments are identified we use SiftSRT to edit the subtitle document and
  create a perfectly aligned subtitle file.
  
 - Tool B  <br/>
 For this tool we have two strings. A string containing the presence and absence
 of 



<div class="section-title margtop3rem">
            <h2><span>Where do we stand? </span></h2>
</div>

<div class="section-title margtop3rem">
            <h2><span>What is yet to be done? </span></h2>
</div>

<div class="section-title margtop3rem">
            <h2><span>What else can been done? </span></h2>
</div>

<div class="section-title margtop3rem">
            <h2><span>GSoC: Endgame </span></h2>
</div>




 
      
   
   


