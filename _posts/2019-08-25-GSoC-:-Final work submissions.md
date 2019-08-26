---
layout: post
title:  "GSoC : Final Work Submission! "
author: syPai
categories: [ GSoC ]
image: assets/images/final_gsoc.png
comments: true
---
Surreal! My first Google Summer of Code has now come to an end. After almost 5 months
(including the research pre-GSoC) it's time to pack up. This has been a journey full of learning. This post is to serve the purpose of the final report fot the work I have done during the summer.

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
 For this tool we have two strings containing speech information. 1 represents 
 the presence of speech in th 10ms window while the absence of speech is represented by
 0;
 The proposed algorithm for this tool, in  n simple terms, for each offset, 
 will take a dot product of one string with the offset version of the other.
 Computing this naively would result in an O
 (n^2)​ solution. And “High speed is
 really a priority” is clearly mentioned in the project’s idea page.​ ​ So, we will use
 the Fast Fourier Transform (FFT), bringing the complexity down to​ ​ O(n log n)​ .
 We will score the alignment based on the number of matching 1's i.e. the
 summation at all values of time of the product of both the strings,
  This is ​ Convolution​. So we can rephrase this problem as, 
  find the index τ which maximizes the value of the convolution of the sequences
  This has been successfully developed but it has not produced results.

<div class="section-title margtop3rem">
            <h2><span>Where do we stand? </span></h2>
</div>

At this point, we have a perfectly working Tool A, capable of doing 
exactly what it is supposed to do. <br /> 
**Installation**<br />
- Clone the repository from 
<a href="https://github.com/sypai/co-oCCur" target="_blank">
     co-oCCur @ Github
   </a>
<br  />
    ```css
    git clone https://github.com/sypai/co-oCCur
    ```
- Navigate to `install `directory and run `build.sh`:<br/>
     ```css
    cd install
    ./build.sh
    ```

    The tool is now ready to use!

**Usage**<br/>
 For a complete list of options and parameters, please
go through the project's 
<a href="https://github.com/sypai/co-oCCur/blob/master/README.md" target="_blank">
     README
   </a>.
   - Sync!<br />
       ```css
        ./co_oCCur -tool [tool options] <tool specific arguments>
       ```
    
        <img class="featured-image img-fluid" src="{{ site.baseurl }}/assets/images/cooccur_wo_args.png" alt="w/0-args">
   
   - **Tool A**<br />
       ```css
       ./co_oCCur -t A -o /path/to/original/audio.wav -m /path/to/modified/audio.wav -s /path/to/original/subtitle.srt 
       ```
       What will this trigger?
       1. Set Tool A to be used for synchronization.
       2. Read the two audio files and generate audio fingerprints for both of them.
       3. Using the alignment algorithm for Tool A, detect the different segments.
       4. Use the information on segments edit the original subtitle file.
       5. Produce a synchronized subtitle file, _co_oCCur-original.srt_.
       
       See it in action: 
       <iframe width="700" height="315" src="https://www.youtube.com/embed/i_HQIUoM6E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       
   - **Tool B**<br />
      ```css
        ./co_oCCur -t B -o /path/to/modified/audio.wav -s /path/to/original/subtitle.srt 
      ```
      What happens next?
      1. Set B as the tool to be used for synchronization.
      2. Read the audio file and create the audio string.
      3. Parse the subtitle file and create the subtitle string.
      4. Using the alignment algorithm for Tool B, detect the different blocks.
      4. Use the information on segments edit the original subtitle file.
      5. Produce a synchronized subtitle file, _co_oCCur-original.srt_.
      
      Check out what really happens!
      <iframe width="700" height="315" src="https://www.youtube.com/embed/i_HQIUoM6E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div class="section-title margtop3rem">
            <h2><span>What else can been done? </span></h2>
</div>
The project is in it's early stage and will keep evolving. The available functions, usage instructions et cetera are 
expected to refactor over time. There are several ideas and features that can be added to this project.
- Currently only SRT is the subtitle format that this project supports. Support for other formats can be added.
- The misalignment of subtitles because of different encoding settings in videos causes a varying temporal offset. This is
also a great feature to add in to our project. <br/>

Also, contribution of any kind is more than welcome. Feel free to raise an issue tracker here: 
<a href="https://github.com/sypai/co-oCCur/issues" target="_blank">
   here
   </a>.
 
<div class="section-title margtop3rem">
            <h2><span>GSoC: Endgame </span></h2>
</div>

Before the final goodbyes, I would like to thank my mentor, 
<a href="https://github.com/cfsmp3" target="_blank">
Carlos Fernandez Sanz 
</a> 
for accepting my proposal, 
providing guidance whenever I asked, and believing in me when things didn't go as intended. I am grateful. 
<br />Shout out to the CCExtractor community for being so welcoming and supportive. 
I am fortunate to be a part of the 
<a href="https://ccextractor.org" target="_blank">
CCExtractor Development 
</a>
<br />
End? No, the journey doesn't end here, it begins.. I'm sure I will stick around as a regular contributor. 

<blockquote class="primary right">
<em>"I pledge my life and honor to the Night's Watch, for this night and all the nights to come."</em>
<br>
</blockquote>


 
      
   
   


