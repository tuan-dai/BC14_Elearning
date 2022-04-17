// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const GP_ID = "GP01";
export const environment = {
  production: true,

  // Settings
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOT0RFSlMgMTgiLCJIZXRIYW5TdHJpbmciOiIwMy8wNS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NTE1MzYwMDAwMDAiLCJuYmYiOjE2MzUwOTQ4MDAsImV4cCI6MTY1MTY4MzYwMH0.WR33CYjpZsWp64GNg_ygfcOGHHNsT5DomeXdzWKxRyg",
  tokenCybersoft: "TokenCybersoft",
  userLogin: "USER_LOGIN",
  authorization: "Authorization",
  accessToken: "accessToken",
  GP_ID,

  // API
  urlApi: "https://elearningnew.cybersoft.edu.vn",

  // Lấy thông tin khóa học
  getInfoCourse: `api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=`,

  // Quản lý khóa hoc
  getListCourseSearch: `api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?`,
  getCourseCategory: `api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
  getCourseByCategory: `api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?`,

  // Thông tin người dung
  infoUserHome: `api/QuanLyNguoiDung/ThongTinNguoiDung`,

  // Quản lý khóa hoc
  getListCourse: `api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GP_ID}`,

  //Them khoa hoc upload hinh
  addCourseUploadImage: `api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh`,

  //Cap nhat khoa hoc upload hinh
  editCourseUploadImage: `api/QuanLyKhoaHoc/CapNhatKhoaHocUpload`,

  // Quản lý người dùng
  getListUser: `api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GP_ID}`,

  // Dang nhap
  login: `api/QuanLyNguoiDung/DangNhap`,

  //Them nguoi dung
  addUser: `api/QuanLyNguoiDung/ThemNguoiDung`,

  //Cap nhat nguoi dung
  editUser: `api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,

  // Lay Danh muc khoa hoc
  getCourseCatagory: `api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,

  // Danh sach nguoi dung chua ghi danh
  getListUserUnregisterd: `api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh`,

  //Ghi danh khoa hoc
  getListUserRegisterd: `api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc`,

  //Danh sach cho xet duyet
  getListUserPending: `api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet`,

  //Ghi danh
  registerCourse: `api/QuanLyKhoaHoc/GhiDanhKhoaHoc`,

  //Huy dang ky
  cancelRegister: `api/QuanLyKhoaHoc/HuyGhiDanh`,

  //Danh sach khoa hoc chua ghi danh
  getListCourseUnregisterd: `api/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh`,

  //Danh sach khoa hoc cho xet duyet
  getListCoursePending: `api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`,

  //Danh sach khoa hoc da xet duyet
  getListCourseRegisterd: `api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
