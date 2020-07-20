import styled from 'styled-components';

export const IncomingTasks = styled.div`
  position: absolute;
  height: 820px;
  left: 292px;
  right: 513px;
  top: 96px;
  text-align: center;
  border-radius: 20px;

  background-color: var(--white);
  box-shadow: 0 1px 1px 1px var(--divider);

  #show-opt {
    text-decoration: none;
    font-size: 20px;
    color: var(--accent-blue);
    transition: filter 200ms;

    &:hover {
      color: blur(50%);
      filter: brightness(70%);
    }
  }
`;

export const Task = styled.div`
  top: 536px;
  left: -75px;

  width: 90%;
  height: auto;
  margin: 40px auto;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 1px 4px 2px var(--divider);

  & + div {
    margin-top: 45px;
  }
  a {
    display: block;
    width: 100%;
    text-decoration: none;

    #title {
      display: flex;
      justify-content: space-between;
      font-size: 16px;

      strong {
        align-items: center;
        color: var(--black);
      }

      span {
        align-items: center;
        font-size: 14px;
        color: var(--gray);
      }
    }

    #dates {
      display: flex;
      position: relative;
      font-size: 12px;
      margin-top: 6px;

      span {
        color: var(--gray);
      }

      p {
        padding-left: 5px;
        font-size: 12px;
        color: var(--table-gray);
      }
    }

    #info {
      margin-top: 20px;
      position: relative;
      display: flex block;

      img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }
      margin-left: 0 16px;
      padding-left: 10px;
      display: flex;

      p {
        padding-left: 10px;
        color: var(--table-gray);
      }
    }
  }
`;

export const Tag = styled.div`
  display: flex block;
  width: 84px;
  background-color: var(--purple);
  border-radius: 10px;
  font-size: 12px;
  text-align: center;
  position: absolute;
  right: -10px;

  span {
    position: relative;
    border-radius: 20px;
    flex: 1;
    color: var(--white);
  }
`;

export const CalendarSection = styled.div`
  display: flex;
  position: absolute;
  width: 445px;
  height: 380px;
  right: 38px;
  top: 96px;

  background-color: var(--white);
  box-shadow: 0 1px 10px 4px var(--divider);

  .react-calendar {
    max-width: 100%;
    background: white;
    line-height: 1.125em;

    padding-left: 5px;
    padding-right: 5px;
  }
  .react-calendar--doubleView {
    width: 100%;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    height: 44px;
    margin-bottom: 1em;
    border-bottom: 1px solid var(--divider);
  }
  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: var(--accent-blue);
  }
  .react-calendar__navigation button[disabled] {
    background-color: var(--icon-gray);
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;

    font-weight: bold;
    font-size: 0.75em;

    abbr {
      text-decoration: none;
    }
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.75em;
  }
  .react-calendar__month-view__weekNumbers {
    font-weight: bold;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
  }
  .react-calendar__month-view__days__day--weekend {
    color: var(--red);
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: var(--gray);
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 1.5em 0.5em;
  }
  .react-calendar__tile {
    max-width: 100%;
    text-align: center;
    padding: 0.75em 0.5em;
    background: none;
  }
  .react-calendar__tile:disabled {
    background-color: var(--white);
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: var(--accent-blue);
    border-radius: 50%;
  }
  .react-calendar__tile--now {
    background: var(--yellow);
    border-radius: 50%;
    filter: opacity(80%);
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    filter: brightness(80%);
    background: var(--accent-blue);
    border-radius: 50%;
  }
  .react-calendar__tile--hasActive {
    background: var(--accent-blue);
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: var(--accent-blue);
    border-radius: 50%;
  }
  .react-calendar__tile--active {
    background: var(--accent-blue);
    color: var(--white);
    border-radius: 50%;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: var(--accent-blue);
    border-radius: 50%;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: var(--white);
  }
`;

export const RecentLeads = styled.div`
  display: flex;
  position: absolute;
  width: 445px;
  height: 380px;
  right: 38px;
  top: 536px;

  background-color: var(--white);
  box-shadow: 0 1px 10px 4px var(--divider);
`;
