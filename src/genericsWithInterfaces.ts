interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X;
}

interface BrandCharaWatch {
  heartRate: string;
  stopwatch: boolean;
}

interface AppleWatch {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  AIFeatures: boolean;
}

const poorDeveloper: Developer<BrandCharaWatch> = {
  name: "John Doe",
  salary: 30000,
  device: {
    brand: "OnePlus",
    model: "Nord CE5",
    releasedYear: "2025",
  },
  smartWatch: {
    heartRate: "72 bpm",
    stopwatch: true,
  },
  bike: null,
};

const richDeveloper: Developer<AppleWatch> = {
  name: "Tanbir Ahamed Jibon",
  salary: 60000,
  device: {
    brand: "Apple",
    model: "iPhone 17 Pro Max",
    releasedYear: "2025",
  },
  smartWatch: {
    heartRate: "72 bpm",
    callSupport: true,
    calculator: true,
    AIFeatures: true,
  },
};

const add = (num1: number, num2: number = 0): number => {
  return num1 + num2;
};
add(5, 10); // 15
add(5); // 5
