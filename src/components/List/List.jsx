import ListItem from "../ListItem/ListItem";
import "./List.scss";
function List({ usersData, showAll, showAllTime }) {
  return (
    <ul>
      {usersData
        .sort((itemF, itemT) => itemT.views - itemF.views)
        .filter((item) => {
          if (showAllTime) {
            return item;
          } else {
            return item.date.getMonth() === 7;
          }
        })
        .map((user, index) => {
          if (showAll) {
            return (
              <ListItem
                key={user.id}
                id={index + 1}
                userImg={user.profileImg}
                userName={user.name}
                userViews={user.views}
                userImgs={user.portfolioImgs}
              />
            );
          } else {
            if (index <= 4) {
              return (
                <ListItem
                  key={user.id}
                  id={index + 1}
                  userImg={user.profileImg}
                  userName={user.name}
                  userViews={user.views}
                  userImgs={user.portfolioImgs}
                />
              );
            }
          }
        })}
    </ul>
  );
}

export default List;
