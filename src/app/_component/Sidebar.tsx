import Link from "next/link";
import style from './css/sidebar.module.css';
import Image from "next/image";
import logo from '../../../public/Logo.png';
import meeting from '../../../public/icon_meetingroom.png';
import seat from '../../../public/icon_seat.png';
import myPage from '../../../public/icon_user.png';

const menuList = [
  {
    id: 0,
    title: '자율좌석',
    path: '/seat',
    isActive: true
  },
  {
    id: 1,
    title: '회의실',
    path: '/meetingRoom',
    isActive: true
  },
  {
    id: 2,
    title: '나의 예약',
    path: '/myPage',
    isActive: true
  }
]

export default function Sidebar() {
  return (
    <div className={style.sidebar}>
      <nav className={style.sidebarNav}>
        <Image src={logo} alt='' style={{marginBottom: '35px'}} />
        <section className={style.sidebarSection}>
          <ul>
            {menuList.map((menu) => (
              <li key={menu.id} className={style.sidebarMenu}>
                <Link href={menu.path}>
                  {menu.id === 0 && <Image src={seat} alt="좌석" />}
                  {menu.id === 1 && <Image src={meeting} alt="회의실" />}
                  {menu.id === 2 && <Image src={myPage} alt="마이페이지" />}
                  <span>{menu.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </div>
  )
}