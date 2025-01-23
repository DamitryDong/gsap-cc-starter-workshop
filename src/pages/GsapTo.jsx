import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
  // Implement the gsap.to(): to animates an object from its current state to a new state. 
  
  // First we will use the GSAP hook useGSAP which is kinda like a useEffect hook but with animations 
  useGSAP(() => {
    gsap.to('#blue-box', {
      x: 250, // x is the short ofr translateX basically moving the element 250px to the right
      repeat: -1, // repeat the animation infinitely
      yoyo: true, // reverse the animation
      rotation: 360, // rotate the element 360 degrees
      duration: 1.2, //uration of the animation
      ease: 'elastic' // easing function
    })
  }, []);

  return (
    <main>
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is similar to the{" "}
        <code>gsap.from()</code> method, but the difference is that the{" "}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.from()</code> method animates
        elements from a new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
