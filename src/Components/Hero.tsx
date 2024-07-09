import Button from "./Button"
import heroImg from '../assets/heroImg.png'
const Hero = () => {
  return (
    <div className="flex items-center gap-3 md:gap-0 flex-col-reverse md:items-start  md:flex-row justify-between mt-12 lg:mt-20 md:pl-[50px] md:pr-[17px] lg:px-[130px]">
      <div className="w-[40%] min-w-[171px] lg:w-[600px]">
        <h1 className="text-2xl font-abhayaExtraBold lg:text-[70px] text-accent leading-7 lg:leading-[83px]">Our Exclusive  Menu is Waiting  For You</h1>
        <p className="text-lg font-abhayaMedium text-accent mt-5 lg:mt-10">You Deserve a Break Today. Feed your child with our amazing meals. <span className="hidden lg:inline-block">McDonald is cooking ... breakfast!</span></p>
        <Button className="bg-white rounded-[10px] lg:text-[20px] w-[130px] lg:w-[170px] h-[35px] lg:h-[50px] shadow-heroBtn font-abhayaMedium mt-5  lg:mt-10" children="Let’s Find Out" type="button" onClick={() => console.log('hello')}/>
      </div>
      <div className="w-[46%] min-w-[200px] lg:w-[450px]">
        <img className="w-full" src={heroImg} alt="Example of a macdonald dish" />
      </div>
    </div>
  )
}

export default Hero
