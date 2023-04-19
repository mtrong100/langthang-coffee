/* =========== COFFEE-IMAGES ================================ */
import cafe1 from "./assets/images/drink_menu/cafe1.png";
import cafe2 from "./assets/images/drink_menu/cafe2.png";
import cafe3 from "./assets/images/drink_menu/cafe3.png";
import cafe4 from "./assets/images/drink_menu/cafe4.png";
import cafe5 from "./assets/images/drink_menu/cafe5.png";

/* =========== MILTEA-IMAGES ============================== */
import ts1 from "./assets/images/drink_menu/ts1.png";
import ts2 from "./assets/images/drink_menu/ts2.png";
import ts3 from "./assets/images/drink_menu/ts3.png";
import ts4 from "./assets/images/drink_menu/ts4.png";
import ts5 from "./assets/images/drink_menu/ts5.png";

/* =========== SODA-IMAGES ================================== */
import soda1 from "./assets/images/drink_menu/soda1.png";
import soda2 from "./assets/images/drink_menu/soda2.png";
import soda3 from "./assets/images/drink_menu/soda3.png";
import soda4 from "./assets/images/drink_menu/soda4.png";
import soda5 from "./assets/images/drink_menu/soda5.png";
import logo from "./assets/images/Exclude.png";

/* =========== CAKE-IMAGES ============================== */
import cake1 from "./assets/images/cake/banh1.png";
import cake2 from "./assets/images/cake/banh2.png";
import cake3 from "./assets/images/cake/banh3.png";
import cake4 from "./assets/images/cake/banh4.png";
import cake5 from "./assets/images/cake/banh5.png";
import cake6 from "./assets/images/cake/banh6.png";
import cake7 from "./assets/images/cake/banh7.png";
import cake8 from "./assets/images/cake/banh8.png";

/* =========== SPACE-SECETION-IMAGES ================================= */
import spaceImg1 from "./assets/images/space_shop/Rectangle46.png";
import spaceImg2 from "./assets/images/space_shop/Rectangle47.png";
import spaceImg3 from "./assets/images/space_shop/Rectangle48.jpg";
import spaceImg4 from "./assets/images/space_shop/Rectangle49.jpg";
import spaceImg5 from "./assets/images/space_shop/Rectangle50.jpg";

/* =========== BESTSELLER-SECTION-IMAGES ========================= */
import best from "./assets/images/img_best/hinh2.png";

/* =========== COMBO-SECETION-IMAGES ================================= */
import combo1 from "./assets/images/combo/Rectangle132.png";
import combo2 from "./assets/images/combo/Rectangle133.png";

/* =========== ABOUT-SECETION-IMAGES ================================= */
import aboutImg1 from "./assets/images/img__advantage/coffee_advantage.jpg";
import aboutImg2 from "./assets/images/img__advantage/ship_advantage.jpg";
import aboutImg3 from "./assets/images/space_shop/Rectangle48.png";

/* =========== AUTHOR-SECETION-IMAGES ================================= */
import author1 from "./assets/images/author/Rectangle55.jpg";
import author2 from "./assets/images/author/Rectangle57.jpg";
import author3 from "./assets/images/author/Rectangle58.jpg";

/* =========== USER-SECETION-IMAGES ================================= */
import user1 from "./assets/images/img__user/user1.jpg";
import user2 from "./assets/images/img__user/user2.jpg";
import user3 from "./assets/images/img__user/user3.jpg";
import user4 from "./assets/images/img__user/user4.jpg";
import user5 from "./assets/images/img__user/user5.jpg";
/* ============================================================== */
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

/* =================== HEADER ==== */
export const nav = [
  {
    id: 1,
    name: "Trang chủ",
    path: "/",
  },
  {
    id: 2,
    name: "Thực Đơn",
    path: "/menu",
  },
  {
    id: 3,
    name: "Ưu đãi",
    path: "/voucher",
  },
  {
    id: 4,
    name: "Về chúng tôi",
    path: "/about",
  },
];

export const settings = {
  userName: "Mr. White Plus",
  userId: "ID : #6996969",
  smallNav: [
    {
      id: 1,
      name: "TRANG CHỦ",
      path: "/",
    },
    {
      id: 2,
      name: "GIỎ HÀNG",
      path: "/cart",
    },
    {
      id: 3,
      name: "VOUCHER",
      path: "/voucher",
    },
    {
      id: 4,
      name: "CÀI ĐẶT",
      path: "/user",
    },
    {
      id: 5,
      name: "ĐĂNG XUẤT",
      path: "/",
    },
  ],
};

/* ================== MAIN CONTENT === */
export const banner = {
  smallTitle: "#welcome to ",
  title: "THE LANGTHANG COFFEE HOUSE",
  caption: "không chỉ là coffee , chúng tôi bán cả sự trải nghiệm",
  booking: "Đặt hàng",
  preview: "xem video giới thiệu",
};

export const space = {
  title: "VỀ KHÔNG GIAN",
  desc: "Không gian của LANGTHANG COFFEE được thiết kế với tông màu vàng ấm áp và thoải mái. Đồ nội thất được bố trí thông minh và tinh tế để mang lại sự thoải mái cho khách hàng. Bức tranh nghệ thuật treo trên tường cùng với đèn lồng pha lê tạo ra một không gian sang trọng và quyến rũ. Bạn có thể ngồi ở các góc ngồi riêng tư hoặc các bàn đơn tùy theo sở thích của mình. LANGTHANG COFFEE sẽ là một nơi lý tưởng để bạn tìm kiếm sự yên bình và thư giãn.",
  spaceImages: [spaceImg1, spaceImg2, spaceImg3, spaceImg4, spaceImg5],
};

export const bestSeller = {
  title: "Best seller #1 Cà phê sữa",
  img: best,
  seeMore: "Cùng tìm hiểu thêm",
};

export const menu = {
  title: "có gì trong thực đơn ?",
  filterBtn: [
    {
      id: 1,
      name: "Tất cả",
      category: "all",
    },
    {
      id: 2,
      name: "Cà Phê",
      category: "coffee",
    },
    {
      id: 3,
      name: "Trà Sữa",
      category: "milktea",
    },
    {
      id: 4,
      name: "Soda",
      category: "soda",
    },
  ],
};

export const voucher = {
  title: "cùng với những ưu đãi",
  combo: [
    {
      id: 1,
      img: combo1,
      title: "ƯU ĐÃI #1",
      desc: "Sự kết hợp giữa Cappuccino và bánh bông lan nhân khô nho là một cách tuyệt vời để kết hợp hương vị ngọt ngào và tươi mát. Cappucino thơm ngon và mát lạnh sẽ làm dịu cơn khát vào những ngày nóng bức. Bánh bông lan nhân khô nho sẽ tạo ra một vị ngọt dịu, cùng với vị giòn của bánh, mang lại trải nghiệm thưởng thức đầy tuyệt vời. Hãy đến LangThang Coffee của chúng tôi để thưởng thức Ưu Đãi này ngay hôm nay!",
    },
    {
      id: 2,
      img: combo2,
      title: "ƯU ĐÃI #2",
      desc: "Cappuccino kết hợp với bánh sừng bò mặn tạo ra sự kết hợp ngon miệng giữa hương vị ngọt và mặn. Bạn có thể thưởng thức miếng bánh sừng bò mặn giòn tan kèm với một cốc Cappuccino thơm ngon và mát lạnh để tạo ra một trải nghiệm thưởng thức thực phẩm hoàn hảo.",
    },
  ],
};

export const about = {
  title: "Vì sao chúng tôi là nơi lí tưởng cho bạn",
  aboutSection: [
    {
      id: 1,
      img: aboutImg1,
      title: "Về cà phê",
      desc: "Cà phê tại quán của chúng tôi được pha chế từ những hạt cà phê chọn lọc kỹ càng và rang theo phương pháp truyền thống để đảm bảo hương vị đặc trưng và chất lượng tuyệt vời. Đến với quán cà phê của chúng tôi, bạn sẽ được thưởng thức một tách cà phê đậm đà và thơm ngon nhất.",
    },
    {
      id: 2,
      img: aboutImg3,
      title: "Về môi trường",
      desc: "Quán của chúng tôi có không gian ấm cúng và thiết kế sang trọng, tạo ra một môi trường thư giãn và đầy cảm hứng cho khách hàng. Bạn sẽ có cơ hội thưởng thức cà phê tuyệt vời trong một không gian thoải mái và đầy hứng khởi. Hãy ghé thăm quán của chúng tôi để tận hưởng không gian đẹp và thoải mái nhất.",
    },
    {
      id: 3,
      img: aboutImg2,
      title: "về giao hàng",
      desc: "Quán của chúng tôi có không gian ấm cúng và thiết kế sang trọng, tạo ra một môi trường thư giãn và đầy cảm hứng cho khách hàng. Bạn sẽ có cơ hội thưởng thức cà phê tuyệt vời trong một không gian thoải mái và đầy hứng khởi. Hãy ghé thăm quán của chúng tôi để tận hưởng không gian đẹp và thoải mái nhất.",
    },
  ],
};

export const contact = {
  title: "ưu đãi Dành riêng Cho khách hàng qua website",
  desc: "Chúng tôi rất cảm kích sự quan tâm của bạn đến LangThang Coffee House và mong muốn có cơ hội chào đón bạn tới thưởng thức các loại nước uống và bánh ngọt tuyệt vời của chúng tôi. Hãy để lại thông tin của bạn để nhận ngay ưu đãi đặc biệt của chúng tôi - giảm ngay 30% trên tổng hóa đơn khi mua nước và bánh tại cửa hàng. Bằng cách đăng ký, bạn sẽ trở thành một phần của cộng đồng LangThang và được cập nhật về những sự kiện và ưu đãi đặc biệt sớm nhất. Chúng tôi cam kết bảo mật thông tin của bạn và chỉ sử dụng để gửi cho bạn các ưu đãi và tin tức mới nhất từ LangThang Coffee House. Một lần nữa, chúng tôi rất trân trọng sự quan tâm của bạn và hy vọng được đón tiếp bạn tại LangThang Coffee House sớm nhất!",
  formTitle: "Thông tin",
  placeHolder1: "Họ và tên khách hàng",
  placeHolder2: "Gmail khách hàng",
  placeHolder3: "Lời nhắn của khách hàng",
  Send: "gửi",
};

export const founder = [
  {
    id: 1,
    img: author1,
    name: "Nguyễn Minh Trí",
    job: "Manager",
  },
  {
    id: 2,
    img: author2,
    name: "Hồ Thị Tố Quyên",
    job: "Founder",
  },
  {
    id: 3,
    img: author3,
    name: "Cao Đức Long",
    job: "Co-founder",
  },
];

export const reply = {
  title: "Khách hàng nghĩ gì về chúng tôi",
  caption:
    "Sự hài lòng của các bạn chính là sự thành công lớn nhất của chúng tôi",
  clients: [
    {
      id: 1,
      name: "Nguyễn Thùy Tiên",
      img: user1,
      job: "Giảng viên",
      desc: "Tôi rất hài lòng về sản phẩm dịch vụ của bạn. Doanh số bán hàng của chúng tôi tăng lên đáng kể, khách hàng cũng phần nào phản hồi tích cực. Hy vọng chúng ta có nhiều cơ hội làm việc với nhau hơn.",
    },
    {
      id: 2,
      name: "Dương Ngọc",
      img: user2,
      job: "Sinh viên",
      desc: "Tôi rất hài lòng về sản phẩm dịch vụ của bạn. Doanh số bán hàng của chúng tôi tăng lên đáng kể, khách hàng cũng phần nào phản hồi tích cực. Hy vọng chúng ta có nhiều cơ hội làm việc với nhau hơn.",
    },
    {
      id: 3,
      name: "Vũ Thắng",
      img: user3,
      job: "Doanh nhân",
      desc: "Tôi rất hài lòng về sản phẩm dịch vụ của bạn. Doanh số bán hàng của chúng tôi tăng lên đáng kể, khách hàng cũng phần nào phản hồi tích cực. Hy vọng chúng ta có nhiều cơ hội làm việc với nhau hơn.",
    },
    {
      id: 4,
      name: "Nguyễn Minh Cường",
      img: user4,
      job: "Người mẫu",
      desc: "Tôi rất hài lòng về sản phẩm dịch vụ của bạn. Doanh số bán hàng của chúng tôi tăng lên đáng kể, khách hàng cũng phần nào phản hồi tích cực. Hy vọng chúng ta có nhiều cơ hội làm việc với nhau hơn.",
    },
    {
      id: 5,
      name: "Lê Hoàng Trọng",
      img: user5,
      job: "Sinh viên",
      desc: "Tôi rất hài lòng về sản phẩm dịch vụ của bạn. Doanh số bán hàng của chúng tôi tăng lên đáng kể, khách hàng cũng phần nào phản hồi tích cực. Hy vọng chúng ta có nhiều cơ hội làm việc với nhau hơn.",
    },
  ],
};

/* ============================ PRODUCTS DATA === */
export const PRODUCTS_DATA = {
  DRINK_DATA: [
    {
      id: 1,
      name: "Trà Sữa Đường Đen",
      subName: "Trà sữa",
      price: 25000,
      img: ts1,
      category: "milktea",
    },
    {
      id: 2,
      name: "Trà Sữa Matcha",
      subName: "Trà sữa",
      price: 32000,
      img: ts2,
      category: "milktea",
    },
    {
      id: 3,
      name: "Trà Sữa Khoai Môn",
      subName: "Trà sữa",
      price: 36000,
      img: ts3,
      category: "milktea",
    },
    {
      id: 4,
      name: "Trà Sữa Chesse",
      subName: "Trà sữa",
      price: 33000,
      img: ts4,
      category: "milktea",
    },
    {
      id: 5,
      name: "Trà Sữa Ca Cao",
      subName: "Trà sữa",
      price: 28000,
      img: ts5,
      category: "milktea",
    },
    {
      id: 6,
      name: "Soda Đào",
      subName: "Soda",
      price: 30000,
      img: soda1,
      category: "soda",
    },

    {
      id: 7,
      name: "Soda Nho",
      subName: "Soda",
      price: 27000,
      img: soda2,
      category: "soda",
    },
    {
      id: 8,
      name: "Soda Dâu",
      subName: "Soda",
      price: 36000,
      img: soda3,
      category: "soda",
    },
    {
      id: 9,
      name: "Soda Chanh",
      subName: "Soda",
      price: 28000,
      img: soda4,
      category: "soda",
    },
    {
      id: 10,
      name: "Soda Ngân Hà",
      subName: "Soda",
      price: 45000,
      img: soda5,
      category: "soda",
    },
    {
      id: 11,
      name: "Cà Phê Đen",
      subName: "Cà Phê",
      price: 19000,
      img: cafe1,
      category: "coffee",
    },
    {
      id: 12,
      name: "Cà Phê Sữa",
      subName: "Cà Phê",
      price: 25000,
      img: cafe2,
      category: "coffee",
    },
    {
      id: 13,
      name: "Cà Phê Thường",
      subName: "Cà Phê",
      price: 17000,
      img: cafe3,
      category: "coffee",
    },
    {
      id: 14,
      name: "Cà Phê Phô Mai",
      subName: "Cà Phê",
      price: 28000,
      img: cafe4,
      category: "coffee",
    },
    {
      id: 15,
      name: "Cà Phê Tuyết",
      subName: "Cà Phê",
      price: 39000,
      img: cafe5,
      category: "coffee",
    },
  ],
  CAKE_DATA: [
    {
      id: 16,
      name: "Bánh Cuộn Nho Khô",
      subName: "Bánh ngọt",
      price: 30000,
      img: cake1,
      category: "cake",
    },

    {
      id: 17,
      name: "Bánh Nướng Mè",
      subName: "Bánh ngọt",
      price: 27000,
      img: cake2,
      category: "cake",
    },

    {
      id: 18,
      name: "Bánh Sừng",
      subName: "Bánh ngọt",
      price: 20000,
      img: cake3,
      category: "cake",
    },

    {
      id: 19,
      name: "Bánh Mật Ngọt",
      subName: "Bánh ngọt",
      price: 22000,
      img: cake4,
      category: "cake",
    },

    {
      id: 20,
      name: "Bánh Cuộn Mức Dâu",
      subName: "Bánh ngọt",
      price: 45000,
      img: cake5,
      category: "cake",
    },

    {
      id: 21,
      name: "Bánh Trứng Muối",
      subName: "Bánh ngọt",
      price: 32000,
      img: cake6,
      category: "cake",
    },

    {
      id: 22,
      name: "Bánh Quế Mật Ong",
      subName: "Bánh ngọt",
      price: 36000,
      img: cake7,
      category: "cake",
    },

    {
      id: 23,
      name: "Bánh Trứng Nướng",
      subName: "Bánh ngọt",
      price: 42000,
      img: cake8,
      category: "cake",
    },
  ],
};

/* ======================= FOOTER === */
export const footer = {
  social: [
    <AiFillFacebook />,
    <AiFillInstagram />,
    <AiFillLinkedin />,
    <AiFillYoutube />,
  ],
  details: [
    {
      id: 1,
      title: "Chi nhánh",
      links: ["Hồ Chí Minh", "Vũng Tàu", "Hà Nội", "Bình Dương", "Long An"],
    },
    {
      id: 2,
      title: "Sản phẩm",
      links: ["Cà phê", "Sữa tươi", "Trà sữa", "Soda", "bánh Ngọt"],
    },
    {
      id: 3,
      title: "Company",
      links: ["Tìm kiếm", "Giới thiệu", "Tuyển dụng"],
    },
    {
      id: 4,
      title: "Khác",
      links: ["Voucher", "Giao hàng", "Sự kiện", "Liên hệ"],
    },
  ],
};
