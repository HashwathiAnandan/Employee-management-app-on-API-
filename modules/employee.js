export default (sequelize, DataTypes) => {
    const employees = sequelize.define(
      'employees',
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true
        },
  
        employeeNames: {
          type: DataTypes.STRING,
          allowNull: false
        },
  
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          required: true,
          validate: {
            isEmail: true
          }
        },
        position: {
          type: DataTypes.STRING,
          allowNull: false
        },
        nationalId: {
          type: DataTypes.STRING,
          allowNull: true,
          unique: true
        },
        phoneNumber: {
          type: DataTypes.STRING,
          allowNull: true,
          unique: true
        },
        birthDate: {
          type: DataTypes.STRING,
          allowNull: true
        },
        status: {
          allowNull: false,
          type: DataTypes.BOOLEAN
        }
      },
      {}
    );
    employees.associate = models => {
      //any association
    };
    return employees;
  };
  