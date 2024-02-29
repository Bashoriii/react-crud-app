import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const User = db.define(
  'asetgroup02',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    KodeCompany: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
    },
    KodeBranch: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
    },
    LevelNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      validate: {
        max: 999,
      },
    },
    KodeAsetGroup: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: '',
      primaryKey: true,
    },
    NamaAsetGroup: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: '',
    },
    Nickname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: '',
    },
    Prefix: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: '',
    },
    KodeParent: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: '',
    },
    SequenceNo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: '',
    },
    Remark: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: '',
    },
  },
  {
    freezeTableName: true,
  }
);

export default User;

(async () => {
  await db.sync();
})();
