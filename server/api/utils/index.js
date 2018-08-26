const userRequests = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209];

const parseUsers = (economy, premium) => {
  const payload = [...userRequests];
  let economyCount = 0;
  let premiumCount = 0;

  return payload.sort((a, b) => b - a).reduce((data, value, index, array) => {
    const type = value >= 100 ? 'premium' : 'economy';
    const user = { type, value };

    if (premiumCount < premium) {
      premiumCount++;
      data.push(user);
    } else if (user.type === 'economy' && economyCount < economy) {
      economyCount++;
      data.push(user);
    }

    if (economyCount === economy && premiumCount === premium) {
      array.splice(index);
    }

    return data;
  }, []);
};

const getUsersByType = (users, type) => {
  const data = users.filter(user => user.type === type);
  const count = data.length;
  const summary = data.reduce((sum, user) => sum + user.value, 0);

  return { count, summary };
};

export default function({ id, date, economy, premium }) {
  const users = parseUsers(economy, premium);

  const data = {
    id,
    date,
    users,
    premium: getUsersByType(users, 'premium'),
    economy: getUsersByType(users, 'economy')
  };

  return data;
}
