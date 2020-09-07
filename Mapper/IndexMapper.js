/**
 * Greated By xuanhei on 2020/9/6
 **/

const {Mapper,Insert,Select} = require('../Annotation/MapperAnnotion')

@Mapper
class IndexMapper {

    /**
     *  增加数据
     */
    @Insert("insert into test set name=?,age=10")
    addTest(obj){

    }

    /**
     *  查询数据
     */
    @Select("select * from test")
    selectTest(){};
}
module.exports = IndexMapper;