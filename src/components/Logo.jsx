// export default function Logo() {
//   return (
//     <a href="#home" className="flex items-center gap-2 group">
//       <div className="leading-none">
//         <span className="font-black text-accent text-lg tracking-tight leading-none">
//           KENNY
//         </span>
//       </div>
//     </a>
//   );
// }

import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/#home" className="flex items-center gap-2 group">
      <div className="leading-none">
        <span className="font-black text-accent text-lg tracking-tight leading-none">
          KENNY
        </span>
      </div>
    </Link>
  );
}