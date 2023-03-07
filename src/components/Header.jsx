import Button from "./Button";

const Header = ({ hideShowAddTaskBar, showAddTaskBar }) => {
  return (
    <div className="block text-center justify-center mt-4 ">
      <h1 className="text-3xl text-white  font-bold   ">Task Tracker</h1>
      <div>
        <Button
          showAddTaskBar={showAddTaskBar}
          hideShowAddTaskBar={hideShowAddTaskBar}
        />
      </div>
    </div>
  );
};

export default Header;
