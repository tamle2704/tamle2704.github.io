// Làm máy tính bỏ túi:

// Chúng ta chia làm 4 nhóm button
// Nhóm 1: Phím số ( bao gồm phím 0 - 9 phím . và +/-)
// Nhóm 2: Phím phép tính ( bao gồm + - * / và %)
// Nhóm 3: Phím xóa ( xóa tất cả: CE và xóa 1 kí tự: <)
// Nhóm 4: Phím =

// Có 2 phím đặc biệt: % và =

/********************* Qui ước cách thao tác **************/
/*
||||| Qui ước nhập phép tính	: Khi bấm + mà ngay sau đó bấm - thì tính là -
||||| Qui ước về %				: Khi bấm % thì ngay trước đó phải là phép tính dạng a/b nếu không kết quả trả về 0.
||||| Qui ước ưu tiên			: 1 (nhân - chia) -> 2 (cộng - trừ). Vd: 5 + 6 * 2 - 5 / 1 = 5 + 12 - 5 = 12
||||| Qui ước cùng ưu tiên		: Khi có phép tính thuộc cùng mức ưu tiên thì sẽ ưu tiên từ trái sang phải. Vd: 5 + 6 - 7 = 11 - 7 = 4
*/

/*

	Nhập: 1 + 15 * 2 + 6 / 3 + 2 * 2

	Mảng số: 								Mảng phép tính:	
		Vị trí		Giá trị				Vị trí			Giá trị
		  0		 =	    1				  0        =       +	
		  1		 =		15				  1		   =       *			
		  2		 = 		2				  2		   =       + 	
		  3      =      6				  3        =       / 	
		  4      =      3				  4		   =       + 
		  5      =      2				  5		   = 	   *		
		  6      =      2

-----------------------------------------------------------------------------

Bước 1: Tính các giá trị ưu tiên mức 1 * hoặc / có trong biểu thức. Sau đó lưu lại bên trong 2 mảng
VD: Duyệt qua thấy phép *

Tính *: 
- Phép nhân sẽ bị loại bỏ khỏi danh sách mảng phép tính,các vị trí đứng sau vị trí phép nhân đó + thêm 1
- 2 số hạng tương ứng với phép nhân sẽ đổi thành 1 số hạng là kết quả của phép tính. Vị trí của các số hạng đứng sau vị trí 2 số hạng vừa gộp vào cộng thêm 1

Mảng số: 								Mảng phép tính:	
		Vị trí		Giá trị				Vị trí			Giá trị
		  0		 =	    1				  0        =       +	
		  1		 =		30				  			
                                          1		   =       + 	
		  2      =      6				  2        =       / 	
		  3      =      3				  3		   =       + 
		  4      =      2				  4		   = 	   *		
		  5      =      2

Tính /:
- Phép chia sẽ bị loại bỏ khỏi danh sách mảng phép tính,các vị trí đứng sau vị trí phép chia đó + thêm 1
- 2 số hạng tương ứng với phép chia sẽ đổi thành 1 số hạng là kết quả của phép tính. Vị trí của các số hạng đứng sau vị trí 2 số hạng vừa gộp vào cộng thêm 1
- Tương tự phép nhân.

Mảng số: 								Mảng phép tính:	
		Vị trí		Giá trị				Vị trí			Giá trị
		  0		 =	    1				  0        =       +	
		  1		 =		30				  			
                                          1		   =       + 	
		  2      =      2				  	
		  3      =      2                 2		   =       + 
		  4      =      2				  3		   = 	   *		
		  

Tính *: 
- Phép nhân sẽ bị loại bỏ khỏi danh sách mảng phép tính,các vị trí đứng sau vị trí phép nhân đó + thêm 1
- 2 số hạng tương ứng với phép nhân sẽ đổi thành 1 số hạng là kết quả của phép tính. Vị trí của các số hạng đứng sau vị trí 2 số hạng vừa gộp vào cộng thêm 1

Mảng số: 								Mảng phép tính:	
		Vị trí		Giá trị				Vị trí			Giá trị
		  0		 =	    1				  0        =       +	
		  1		 =		30				  			
                                          1		   =       + 	
		  2      =      2				   	
		  				  				  2		   =       + 
		  3      =      4				  	

Tính +:
- Tính từ trái sang phải.

Mảng số: 								Mảng phép tính:	
		Vị trí		Giá trị				Vị trí			Giá trị
		  0		 =	    31				  	
		  				  			
                                          0		   =       + 	
		  1      =      2				   	
		  				  				  1		   =       + 
		  2      =      4				  		

Biểu thị: 1 + 15 * 2 + 6 / 3 + 2 * 2
=		  1 +    30  +   2   +   4
=		  	31       +   2   +   4
=		  			33       +   4
=		  			        37				
*/