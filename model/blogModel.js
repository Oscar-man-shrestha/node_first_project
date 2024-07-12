module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define("blog", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull : false
      },
      password: {
        type: DataTypes.TEXT,
        allowNull:false
      },
    
    });
    return Blog;
  };