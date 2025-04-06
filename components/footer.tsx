export default function Footer(){
    const currentYear = new Date().getFullYear();
    return (
    <footer className="bg-black w-full p-4 h-[150px] flex items-center justify-end">
          <h3 className="text-sm italic text-gray-400">&copy; {currentYear}  Developed by Lucas Darela. <span>® All Rights Reserved.</span></h3>
    </footer>
    );
}