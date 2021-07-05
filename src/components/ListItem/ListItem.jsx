import "./ListItem.scss";

function ListItem({ id, userImg, userName, userViews, userImgs }) {
  return (
    <li className="item-container item">
      <div className="item-firstpart firstpart">
        <div className="firstpart-id id">
          <span className="id-number">{id}</span>
          <img className="id-img" src={userImg} alt="profile-img" />
        </div>
        <div className="firstpart-info info">
          <h1 className="info-name">{userName}</h1>
          <h6 className="info-views">{userViews}M views</h6>
        </div>
      </div>
      <div className="item-secondpart secondpart">
        <div className="item-images">
          {userImgs.map((img, index) => (
            <img
              key={index}
              className="item-images__child"
              src={img}
              alt="portfolioImg"
            />
          ))}
        </div>
      </div>
    </li>
  );
}

export default ListItem;
