type LottoNumbersProps = {
  setLottoNumbers: React.Dispatch<React.SetStateAction<number[]>>;
};

const LottoNumbers = ({ setLottoNumbers }: LottoNumbersProps) => {
  const generateLottoNumbers = () => {
    const numbers = new Set<number>();
    while (numbers.size < 7) {
      numbers.add(Math.floor(Math.random() * 50) + 1);
    }
    setLottoNumbers(Array.from(numbers));
  };

  return <button onClick={generateLottoNumbers}>Generate Lotto Numbers</button>;
};

export default LottoNumbers;
