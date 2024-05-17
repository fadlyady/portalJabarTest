export class tambahLayanan {
    // Form Pelayanan

    fieldUrusanPemerintahan(){
        return cy.get('input[placeholder="Pilih urusan pemerintahan"]')
    }

    optionUrusanPemerintahanPendidikan(){
        return cy.xpath("//span[contains(text(),'PENDIDIKAN')]")
    }

    fieldSubUrusanPemerintahan(){
        return cy.get('input[placeholder="Pilih sub urusan pemerintahan"]')
    }

    optionSubUrusanPemerintahanPendidikan(){
        return cy.xpath("//span[contains(text(),'Manajemen Pendidikan')]")
    }

    fieldBentukLayanan(){
        return cy.get('input[placeholder="Pilih bentuk layanan"]')
    }

    optionBentukLayananAdmin(){
        return cy.xpath("//span[contains(text(),'Administratif')]")
    }

    fieldJenisLayanan(){
        return cy.get('input[placeholder="Masukkan jenis layanan"]')
    }

    fieldNamaLayanan(){
        return cy.get('input[placeholder="Masukkan nama layanan"]')
    }

    fieldNamaProgramLayanan(){
        return cy.get('input[placeholder="Masukkan nama program layanan"]')
    }

    fieldDeskripsiLayanan(){
        return cy.get('textarea[placeholder="Masukkan deskripsi layanan"]')
    }

    fieldPenggunaLayanan(){
        return cy.get('input[placeholder="Pilih pengguna layanan"]')
    }

    optionPenggunaASN(){
        return cy.xpath("//span[contains(text(),'ASN')]")
    }

    fieldLayananSPBE(){
        return cy.get('input[placeholder="Pilih kategori layanan SPBE"]')
    }

    fieldSearchOption(){
        return cy.xpath("//div[@class='jds-popover__content']//input[1]")
    }

    optionSPBEEkonomi(){
        return cy.xpath("//span[contains(text(),'Ekonomi')]")
    }

    fieldStatusOperasional(){
        return cy.get('input[placeholder="Pilih status operasional"]')
    }

    optionStatusAktif(){
        return cy.xpath("(//span[contains(text(),'Aktif')])[1]")
    }

    fieldTeknisLayanan(){
        return cy.get('input[placeholder="Pilih teknis layanan"]')
    }

    optionTeknisLayananOnline(){
        return cy.xpath("//li[contains(.,'Online')]")
    }

    fieldManfaatLayanan(){
        return cy.get('input[placeholder="Masukkan manfaat layanan"]')
    }

    fieldFasilitasLayanan(){
        return cy.get('input[placeholder="Masukkan fasilitas layanan"]')
    }

    fieldAlamatWebsiteResmi(){
        return cy.get('input[placeholder="Masukkan alamat website informasi resmi"]')
    }

    fieldTautanLayanan(){
        return cy.get('input[placeholder="https://"]')
    }

    fieldLabelTautan(){
        return cy.get('input[placeholder="Masukkan label tautan"]')
    }

    fieldSyaratDanKetentuanLayanan(){
        return cy.get('input[placeholder="Masukkan syarat dan ketentuan layanan"]')
    }

    fieldProsedurLayanan(){
        return cy.get('input[placeholder="Masukkan prosedur layanan"]')
    }

    toggleTarifLayanan(){
        return cy.get('input[name="toggle"]')
    }

    fieldTarifLayanan(){
        return cy.xpath('(//input[@placeholder="cth: 7000"])[1]')
    }

    fieldTarifMaksimal(){
        return cy.xpath('(//input[@placeholder="cth: 7000"])[2]')
    }

    fieldKeteranganKhusus(){
        return cy.get('input[placeholder="Masukkan keterangan khusus berupa text atau link"]')
    }

    checkBoxSenin(){
        return cy.get('input[type="checkbox"]').eq(2)
    }

    fieldJamBukaSenin(){
        return cy.get('input[placeholder="cth: 06:00"]').eq(0)
    }

    fieldJamTutupSenin(){
        return cy.get('input[placeholder="cth: 17:00"]').eq(0)
    }

    checkBoxSelasa(){
        return cy.get('input[type="checkbox"]').eq(3)
    }

    fieldJamBukaSelasa(){
        return cy.get('input[placeholder="cth: 06:00"]').eq(1)
    }

    fieldJamTutupSelasa(){
        return cy.get('input[placeholder="cth: 17:00"]').eq(1)
    }

    checkBoxRabu(){
        return cy.get('input[type="checkbox"]').eq(4)
    }

    fieldJamBukaRabu(){
        return cy.get('input[placeholder="cth: 06:00"]').eq(2)
    }

    fieldJamTutupRabu(){
        return cy.get('input[placeholder="cth: 17:00"]').eq(2)
    }

    checkBoxKamis(){
        return cy.get('input[type="checkbox"]').eq(5)
    }

    fieldJamBukaKamis(){
        return cy.get('input[placeholder="cth: 06:00"]').eq(3)
    }

    fieldJamTutupKamis(){
        return cy.get('input[placeholder="cth: 17:00"]').eq(3)
    }

    checkBoxJumat(){
        return cy.get('input[type="checkbox"]').eq(6)
    }

    fieldJamBukaJumat(){
        return cy.get('input[placeholder="cth: 06:00"]').eq(4)
    }

    fieldJamTutupJumat(){
        return cy.get('input[placeholder="cth: 17:00"]').eq(4)
    }

    checkBoxSabtu(){
        return cy.get('input[type="checkbox"]').eq(7)
    }

    fieldJamBukaSabtu(){
        return cy.get('input[placeholder="cth: 06:00"]').eq(5)
    }

    fieldJamTutupSabtu(){
        return cy.get('input[placeholder="cth: 17:00"]').eq(5)
    }

    checkBoxMinggu(){
        return cy.get('input[type="checkbox"]').eq(8)
    }

    fieldJamBukaMinggu(){
        return cy.get('input[placeholder="cth: 06:00"]').eq(6)
    }

    fieldJamTutupMinggu(){
        return cy.get('input[placeholder="cth: 17:00"]').eq(6)
    }

    fieldKontakTelpon(){
        return cy.get('input[placeholder="cth: 022 2342345"]')
    }

    fieldKontakEmail(){
        return cy.get('input[placeholder="cth: jabarprov@go.id"]')
    }

    //section Lokasi Pelayanan
    fieldJenisLokasi(){
        return cy.get('input[placeholder="Pilih Jenis Lokasi"]')
    }

    optionJenisLokasiKhusus(){
        return cy.xpath("//span[contains(text(),'Khusus')]")
    }

    fieldPenanggungJawabLokasi(){
        return cy.get('input[placeholder="Pilih Penanggung Jawab Lokasi"]')
    }

    optionPenanggungJawabLokasiUPTD(){
        return cy.xpath("//span[contains(text(),'UPTD')]")
    }

    fieldNamaLokasi(){
        return cy.get('input[placeholder="Masukkan nama lokasi"]')
    }

    fieldAlamatLokasi(){
        return cy.get('textarea[placeholder="Masukkan alamat lokasi"]')
    }

    fieldKontakLokasi(){
        return cy.get('input[placeholder="Masukkan kontak lokasi"]')
    }

    btnSimpanLanjutkan(){
        return cy.xpath("//button[.=' Simpan & Lanjutkan ']")
    }

    // section Aplikasi
    fieldStatusKetersediaanAplikasi(){
        return cy.get('input[placeholder="Pilih Ketersediaan Aplikasi"]')
    }

    optionKetersediaanAplikasiTersedia(){
        return cy.xpath("(//span[contains(text(),'Tersedia')])[1]")
    }

    fieldNamaAplikasi(){
        return cy.get('input[placeholder="Nama Aplikasi"]')
    }

    fieldFiturAplikasi1(){
        return cy.get('input[placeholder="Masukkan fitur aplikasi"]').eq(0)
    }

    fieldDeskripsiAplikasi1(){
        return cy.get('textarea[placeholder="Masukkan deskripsi"]').eq(0)
    }

    btnTambahFiturApliasi(){
        return cy.xpath("//button[.=' Tambahkan Fitur Aplikasi ']")
    }

    fieldFiturAplikasi2(){
        return cy.get('input[placeholder="Masukkan fitur aplikasi"]').eq(1)
    }

    fieldDeskripsiAplikasi2(){
        return cy.get('textarea[placeholder="Masukkan deskripsi"]').eq(1)
    }

    fieldFiturAplikasi3(){
        return cy.get('input[placeholder="Masukkan fitur aplikasi"]').eq(2)
    }

    fieldDeskripsiAplikasi3(){
        return cy.get('textarea[placeholder="Masukkan deskripsi"]').eq(2)
    }

    // section Informasi Tambahan
    fieldPejabatPenanggungJawab(){
        return cy.get('input[placeholder="Masukkan Nama Pejabat Penanggung Jawab"]')
    }

    fieldNomorHP(){
        return cy.get('input[placeholder="cth: 0812345678"]')
    }

    fielNamaSosialMedia(){
        return cy.get('input[placeholder="Masukkan Nama Sosial Media"]')
    }

    btnTambahkanLayanan(){
        return cy.xpath("//button[.=' Tambahkan Layanan ']")
    }

    //section pop up verification
    popUpModalContainer(){
        return cy.xpath("//section[@data-cy='modal-container']")
    }

    containNamaPerangkatDaerah(){
        return cy.xpath("//p[contains(.,'Nama Perangkat Daerah:')]//following-sibling::p")
    }

    containNamaLayanan(){
        return cy.xpath("//p[contains(.,'Nama Layanan:')]//following-sibling::p")
    }

    containNamaProgramLayanan(){
        return cy.xpath("//p[contains(.,'Nama Program Layanan:')]//following-sibling::p")
    }

    containDeskripsiLayanan(){
        return cy.xpath("//p[contains(.,'Deskripsi Layanan:')]//following-sibling::p")
    }

    containPenggunaLayanan(){
        return cy.xpath("//p[contains(.,'Pengguna Layanan:')]//following-sibling::p")
    }

    containKategoriLayananSPBE(){
        return cy.xpath("//p[contains(.,'Kategori Layanan SPBE (RAL 2):')]//following-sibling::p")
    }

    containStatusOperasional(){
        return cy.xpath("//p[contains(.,'Status Operasional:')]//following-sibling::p")
    }

    containTeknisLayanan(){
        return cy.xpath("//p[contains(.,'Teknis Layanan:')]//following-sibling::p")
    }

    containManfaatLayanan(){
        return cy.xpath("//p[contains(.,'Manfaat Layanan:')]//following-sibling::ul/li/span")
    }

    containFasilitasLayanan(){
        return cy.xpath("//p[contains(.,'Fasilitas Layanan:')]//following-sibling::span")
    }

    containAlamatWebsiteResmi(){
        return cy.xpath("//p[contains(.,'Alamat Website Informasi Resmi:')]//following-sibling::a")
    }

    containTautan(){
        return cy.xpath("//p[contains(.,'Tautan:')]//following-sibling::ul/li/p")
    }

    containSyaratKetentuan(){
        return cy.xpath("//p[contains(.,'Syarat dan Ketentuan Layanan:')]//following-sibling::ul/li/span")
    }

    containProsedurLayanan(){
        return cy.xpath("//p[contains(.,'Prosedur Layanan:')]//following-sibling::ul/li/span")
    }

    containTarifLayanan(){
        return cy.xpath("//p[contains(.,'Tarif Layanan:')]//following-sibling::p")
    }

    containKeteranganKhusus(){
        return cy.xpath("//p[contains(.,'Keterangan Khusus:')]//following-sibling::p")
    }

    containWaktuOperasionalSenin(){
        return cy.xpath("(//p[contains(.,'Waktu Operasional:')]//following-sibling::ul/li/span)[1]")
    }

    containWaktuOperasionalSelasa(){
        return cy.xpath("(//p[contains(.,'Waktu Operasional:')]//following-sibling::ul/li/span)[2]")
    }

    containWaktuOperasionalRabu(){
        return cy.xpath("(//p[contains(.,'Waktu Operasional:')]//following-sibling::ul/li/span)[3]")
    }

    containWaktuOperasionalKamis(){
        return cy.xpath("(//p[contains(.,'Waktu Operasional:')]//following-sibling::ul/li/span)[4]")
    }

    containWaktuOperasionalJumat(){
        return cy.xpath("(//p[contains(.,'Waktu Operasional:')]//following-sibling::ul/li/span)[5]")
    }

    containWaktuOperasionalSabtu(){
        return cy.xpath("(//p[contains(.,'Waktu Operasional:')]//following-sibling::ul/li/span)[6]")
    }

    containWaktuOperasionalMinggu(){
        return cy.xpath("(//p[contains(.,'Waktu Operasional:')]//following-sibling::ul/li/span)[7]")
    }

    containKontakHotlineHP(){
        return cy.xpath("//p[contains(.,'Kontak Hotline (Nomor HP/Telp):')]//following-sibling::p")
    }

    containKontakHotlineEmail(){
        return cy.xpath("//p[contains(.,'Kontak Hotline (Alamat Email):')]//following-sibling::a")
    }

    containJenisLokasi(){
        return cy.xpath("//p[contains(.,'Jenis Lokasi:')]//following-sibling::p")
    }

    containPenanggungJawabLokasi(){
        return cy.xpath("//p[contains(.,'Penanggung Jawab Lokasi:')]//following-sibling::p")
    }

    containNamaLokasi(){
        return cy.xpath("//p[contains(.,'Nama Lokasi:')]//following-sibling::p")
    }

    containAlamatLokasi(){
        return cy.xpath("//p[contains(.,'Alamat Lokasi:')]//following-sibling::p")
    }

    containKontakLokasi(){
        return cy.xpath("//p[contains(.,'Kontak Lokasi (Nomor HP/Telp):')]//following-sibling::p")
    }

    tabAplikasi(){
        return cy.xpath("//p[contains(.,'Aplikasi')]")
    }

    //pop up verification tab Aplikasi
    containStatusKetersedianAplikasi(){
        return cy.xpath("//p[contains(.,'Status Ketersediaan Aplikasi:')]//following-sibling::p")
    }

    containNamaAplikasi(){
        return cy.xpath("//p[contains(.,'Nama Aplikasi:')]//following-sibling::p")
    }

    containFiturAplikasi1(){
        return cy.xpath("(//p[contains(.,'Fitur Aplikasi:')]//following-sibling::p)[1]")
    }

    containDeskripsiAplikasi1(){
        return cy.xpath("(//p[contains(.,'Deskripsi Fitur:')]//following-sibling::p)[1]")
    }

    containFiturAplikasi2(){
        return cy.xpath("(//p[contains(.,'Fitur Aplikasi:')]//following-sibling::p)[2]")
    }

    containDeskripsiAplikasi2(){
        return cy.xpath("(//p[contains(.,'Deskripsi Fitur:')]//following-sibling::p)[2]")
    }

    containFiturAplikasi3(){
        return cy.xpath("(//p[contains(.,'Fitur Aplikasi:')]//following-sibling::p)[3]")
    }

    containDeskripsiAplikasi3(){
        return cy.xpath("(//p[contains(.,'Deskripsi Fitur:')]//following-sibling::p)[3]")
    }

    tabInformasiTambahan(){
        return cy.xpath("//p[contains(.,'Informasi Tambahan')]")
    }

    //section pop up verification Informasi Tambahan
    containNamaPejabatPenanggungJawab(){
        return cy.xpath("//p[contains(.,'Nama Pejabat Penanggung Jawab:')]//following-sibling::p")
    }

    containKontakPejabatPenanggungJawab(){
        return cy.xpath("//p[contains(.,'Nomor Kontak (HP/Telp):')]//following-sibling::p")
    }

    containEmailPejabatPenanggungJawab(){
        return cy.xpath("//p[contains(.,'Alamat Email:')]//following-sibling::a")
    }

    containNamaMediaSosial(){
        return cy.xpath("//p[contains(.,'Nama Media Sosial Layanan:')]//following-sibling::p")
    }

    containTautanMediaSosial(){
        return cy.xpath("//p[contains(.,'FACEBOOK')]//following-sibling::a")
    }

    btnBatalPopUp(){
        return cy.xpath("//div[@data-cy='modal-footer']//button[contains(.,'Batal')]")
    }
}