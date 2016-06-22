export function searchUsers(users = ['Adam', 'Andrew', 'Jordan', 'Sepher']) {
  return { type: 'FOLLOW_USER', users };
}
