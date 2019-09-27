let list = [];
list.push(new idol("Khá Bảnh", "1993","kha_banh@gmail.com","0383939393"));
list.push(new idol("Huấn Hoa Hòe", "1984","huan_hoa_hoe@gmail.com","0384848484"));
list.push(new idol("Trần Dần", "Chưa tìm ra","tran_dan@covantoicao.com","19001008"));
list.push(new idol("Khánh Sky", "1996","khanh@sky.com","0123451996"));
list.push(new idol("Tuyền Trọc", "1986","tuyen_moi_ra_tu@gmail.com","0123451986"));
newTable();

function idol(name, year, email, phone){   
    this.name = name;
    this.year = year;
    this.email = email;
    this.phone = phone;
    this.control = '<span style="color:red;font-weight:bold"  onclick="delStudent(this)"><i class="fas fa-trash-alt"></i> &nbsp; Xóa </span>';

    this.create = function(){
        return `<tr>
                    <td>${this.name}</td>
                    <td>${this.year}</td>
                    <td>${this.email}</td>
                    <td>${this.phone}</td>
                    <td>${this.control}</td>
                </tr>`
    }
   
}
function delStudent(student){
    let del = confirm("Thầy có chắc muốn xử thanh niên này?")
    if(del){
    $(student).parents("tr").remove();
    }
}
function sortNameUp(){
    sortTableUp("name");
}

function sortNameDown(){
    sortTableDown("name");
}

function delTable(){
    $("#table tbody").empty();
}
function newTable(){
    list.forEach(function(obj){
        $(obj.create()).appendTo("#table tbody")
   });
}
function sortTableUp(name){
    list.sort(function(a, b){
        a = a[name];
        b = b[name];
        if(a < b){
            return -1;
        }else {
            return 1;
        }
        
    });
    delTable();
    newTable();
}
function sortTableDown(name){
    list.sort(function(a, b){
        a = a[name];
        b = b[name];
        if(a < b){
            return 1;
        }else {
            return -1;
        }
        
    });
    delTable();
    newTable();
}