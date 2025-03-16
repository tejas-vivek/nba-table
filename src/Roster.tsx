import { observer } from "mobx-react";
import Athlete from "./Athlete";
import TradeForm from "./TradeForm";

const lebronJames = new Athlete("Lebron James", 37);
const stephCurry = new Athlete("Steph Curry", 34);

function Roster() {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Teams</th>
        <th>Trade Form</th>
        <th>Is it their birthday?</th>
      </tr>
      {[lebronJames, stephCurry].map((athlete) => {
        return (
          <tr key={athlete.name}>
            <td>{athlete.name}</td>
            <td>{athlete.age}</td>
            <td>{athlete.teamHistory}</td>
            <td>
              <TradeForm athlete={athlete} />
            </td>
            <td>
              <button
                type="button"
                style={{ width: "100%" }}
                onClick={() => athlete.wishHappyBirthday()}
              >
                Wish Birthday
              </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
}

export default observer(Roster);
