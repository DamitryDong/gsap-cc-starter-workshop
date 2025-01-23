import { useGSAP } from "@gsap/react";
import gsap from "gsap";

  // Implement the gsap timeline: You can manually add delays to animations, but gsap timeline allows you to manage multiple animations in a single timeline without adding specific timers to code.
  // first we must set the gsap.timeline to a variable and this basically is a variable we will add new animation to. 
  const timeline = gsap.timeline({
    repeat: -1,
    yoyo: true,
    repeatDelay: 1,
  })

const GsapTimeline = () => { 

  useGSAP(() => {  //now we can add these differnt animations to the timeline with useGSAP hook
    // we can then call the variable with a 'to' method and this will be the first animation in the timeline
    timeline.to('#yellow-box', {
      x: 250,
      rotation: 360,
      borderRadius: '100%',
      duration: 2,
      ease: 'back.inOut'
    })

    // this will be the next thing in the timeline
    timeline.to('#yellow-box', {
      x: 500,
      scale: 1.5,
      rotation: 360, 
      borderRadius: '8px',
      duration: 2,
      ease: 'back.inOut'
    })

    timeline.to('#yellow-box', {
      y: 100,
      scale: .5 ,
      rotation: 360, 
      borderRadius: '50%',
      duration: 2,
      ease: 'back.inOut'
    })
  }, []);

  return (
    <main>
      <h1>GsapTimeline</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.timeline()</code> method is used to create a timeline
        instance that can be used to manage multiple animations.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.timeline()</code> method is similar to the{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
        <code>gsap.fromTo()</code> methods, but the difference is that the{" "}
        <code>gsap.timeline()</code> method is used to create a timeline
        instance that can be used to manage multiple animations, while the{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
        <code>gsap.fromTo()</code> methods are used to animate elements from
        their current state to a new state, from a new state to their current
        state, and from a new state to a new state, respectively.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.timeline()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.timeline()
        </a>{" "}
        method.
      </p>

      <div className="mt-20 space-y-10">
        <button onClick={() => {}}>Play/Pause</button>

        <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTimeline;
