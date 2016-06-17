<div class="popup" id="popupForm">
	<form class="form" action="form.php">
		<h2>Перезвоните мне</h2>
		<p>Мы свяжемся с вами, ответим на все вопросы 
			или запишем на прием к доктору</p>
			<div class="container-fluid">
				<div class="row">

					<div class="col-md-12">
						<label for="name">Отделение</label>
						<select>
							<option disabled="">Выберите удобное для вас отделение</option>
							<option value="lukyanovka" rel="icon-temperature">Киев, Лукьяновка</option>
							<option value="kpi">Киев, м."КПИ"</option>
							<option value="osocorki">Киев, м."Осокорки"</option>
							<option value="ivano">Ивано-Франковск</option>
							<option value="centr">Кмев,  Центр укрепления позвоночника и реабилитации суставов</option>
							<option value="lvov">Львов</option>							
						</select>
					</div>

					<div class="col-md-12">
						<label for="company">Имя</label>
						<input type="text" name="name" placeholder="Имя" requaired>
					</div>
					

					<div class="col-md-12">
						<label for="text">Телефон</label>
						<input type="text" name="phone" placeholder="+380" requaired>
					</div>					
					<div class="col-md-12">
						<button type="submit" class="btn full">Отправить заявку</button>
					</div>
				</div>
			</div>
		</form>
	</div>
	