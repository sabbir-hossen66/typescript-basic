{

  let anything: any;
  anything: 'something will missing';
  anything: 333335;
  (anything as number)

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === 'string') {
      const convertedValue = parseFloat(value) * 1000
      return convertedValue;
    }
    if (typeof value === 'number') {
      return value * 1000
    }
  }

  const result1 = kgToGm(1000) as number
  const result2 = kgToGm("333") as string



}