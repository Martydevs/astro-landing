import useCountdown from "../hooks/useCountdown";

function Countdown({ targetDate = new Date() }) {
  const { days, hours, minutes, seconds } = useCountdown(targetDate)

  return (
    <div className="flex gap-5">
      <div>
        <span className="countdown font-mono text-4xl mr-1">
          <span style={{ "--value": days }}></span>
        </span>
        dias
      </div>
      <div>
        <span className="countdown font-mono text-4xl mr-1">
          <span style={{ "--value": hours }}></span>
        </span>
        horas
      </div>
      <div>
        <span className="countdown font-mono text-4xl mr-1">
          <span style={{ "--value": minutes }}></span>
        </span>
        minutos
      </div>
      <div>
        <span className="countdown font-mono text-4xl mr-1">
          <span style={{ "--value": seconds }}></span>
        </span>
        segundos
      </div>
    </div>
  );
}

export default Countdown;
