import React, { useState } from "react";
import { GrNotification } from "react-icons/gr";
import { BsHeadset } from "react-icons/bs";
import {
  AiOutlineSearch,
  AiOutlinePlus,
  AiOutlineImport,
} from "react-icons/ai";
import { TbFocusCentered } from "react-icons/tb";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import Modals from "react-modal";
import "antd/dist/antd.css";

import { Select } from "antd";

Modals.setAppElement("#root");

const { Option } = Select;
const children = [
  {
    name: "đỏ",
  },
  {
    name: "xanh",
  },
];

children.push(<Option key={children}>{children.name}</Option>);
const selectChange = (value) => {
  console.log(`Selected: ${value}`);
};

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const MainContent = () => {
  const [size, setSize] = useState("middle");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__left">
          <h2>Welcome</h2>
          <span>Đạt, Phạm Quốc</span>
        </div>
        <div className="main__header__right">
          <div className="main__header__right__bar">
            <AiOutlineSearch />
            <input type="text" />
            <div className="main__header__right__bar__enter">
              <TbFocusCentered />
              Enter
            </div>
          </div>
          <div className="main__header__right__icons">
            <GrNotification />
            <BsHeadset />
          </div>
        </div>
      </div>
      <div className="main__content">
        <div className="main__content__btns">
          <button onClick={() => toggleModal()}>
            Thêm mới
            <AiOutlinePlus />
          </button>
          <button>
            Nhập liệu
            <AiOutlineImport />
          </button>
        </div>
        <div className="main__content__info">
          {/* Using React-Modal create modal add Product */}
          <Modals
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
            style={{
              content: {
                inset: "15rem",
                position: "absolute",
                top: "20px",
              },
            }}
          >
            <h1>Tạo mới sản phẩm</h1>
            <form action="">
              <div className="formfield">
                <div className="formfield__list">
                  <div className="formfield__list__item">
                    <label htmlFor="">Nhóm 1</label>
                    <input type="text" />
                  </div>
                  <div className="formfield__list__item">
                    <label htmlFor="">Tên SP</label>
                    <input type="text" />
                  </div>
                  <div className="formfield__list__item">
                    <label htmlFor="">Tổng doanh thu</label>
                    <input type="text" />
                  </div>
                  <div className="formfield__list__item">
                    <label htmlFor="">Tổng tồn</label>
                    <input type="text" />
                  </div>
                  <div className="formfield__list__item">
                    <label htmlFor="">Hình ảnh</label>
                    {/* <input type="text" /> */}

                    {/* Using Antd create upload preview Image */}
                    <Upload
                      action="https://jsonplaceholder.typicode.com/posts/"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={handleChange}
                    >
                      {fileList.length >= 3 ? null : uploadButton}
                    </Upload>
                    <Modal
                      visible={previewVisible}
                      title={previewTitle}
                      footer={null}
                      onCancel={handleCancel}
                    >
                      <img
                        alt="example"
                        style={{
                          width: "100%",
                        }}
                        src={previewImage}
                      />
                    </Modal>
                  </div>
                </div>
                <div className="formfield__list">
                  <div className="formfield__list__item">
                    <label htmlFor="">Nhóm 2</label>
                    <input type="text" />
                  </div>
                  <div className="formfield__list__item">
                    <label htmlFor="">Khu vực</label>
                    <input type="text" />
                  </div>
                  <div className="formfield__list__item">
                    <label htmlFor="">Brand</label>
                    <input type="text" />
                  </div>
                  <div className="formfield__list__item">
                    <label htmlFor="">Tổng bán</label>
                    <input type="text" />
                  </div>
                  <div className="formfield__list__item">
                    <label htmlFor="">Màu sắc</label>
                    {/* <input type="text" /> */}

                    <Select
                      mode="tags"
                      size={size}
                      placeholder="Vui lòng chọn màu sắc"
                      defaultValue={[]}
                      onChange={selectChange}
                      style={{
                        width: "100%",
                      }}
                    >
                      {children.name}
                    </Select>
                  </div>
                </div>
                <div className="formfield__list">
                  <div className="formfield__list__item">
                    <label htmlFor="">Thông số</label>
                    <input className="information" type="text" />
                  </div>
                </div>
              </div>
            </form>

            <button onClick={toggleModal}>Close modal</button>
          </Modals>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
