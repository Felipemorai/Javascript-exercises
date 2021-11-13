let permission; /* Common, Manager, Director */
permission = 'common';

switch (permission) {
    case 'common':
        console.log('Common user');
        break;

    case 'manager':
        console.log("Manager user");
        break;

    case 'director':
        console.log('Director user');
        break;

    default:
        console.log('Unrecognized user!');
}