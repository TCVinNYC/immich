import 'package:easy_localization/easy_localization.dart';
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';
import 'package:flutter_hooks/flutter_hooks.dart';
import 'package:immich_mobile/modules/backup/models/backup_state.model.dart';
import 'package:immich_mobile/modules/backup/providers/backup.provider.dart';
import 'package:immich_mobile/modules/home/ui/delete_diaglog.dart';
import 'package:immich_mobile/shared/providers/asset.provider.dart';

class ManualDeviceCleanupWidget extends HookConsumerWidget {
  const ManualDeviceCleanupWidget({
    Key? key,
    required this.backupState,
  }) : super(key: key);

  final BackUpState backupState;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final isUploaded = useState(
      backupState.allUniqueAssets.length ==
              backupState.selectedAlbumsBackupAssetsIds.length &&
          backupState.allUniqueAssets.isNotEmpty,
    );
    return Padding(
      padding: const EdgeInsets.fromLTRB(0, 5, 20, 0),
      child: Row(
        children: [
          SizedBox(
            width: 250,
            child: ListTile(
              title: Text(
                isUploaded.value
                    ? "delete_backed_up_assets_enabled"
                    : "delete_backed_up_assets_disabled",
                style: const TextStyle(
                  fontSize: 12,
                  fontWeight: FontWeight.bold,
                ),
              ).tr(),
              subtitle: const Text(
                "delete_backed_up_assets_description",
                style: TextStyle(
                  fontSize: 12,
                ),
              ).tr(),
            ),
          ),
          const Spacer(),
          ElevatedButton(
            onPressed: isUploaded.value
                ? () {
                    showDialog(
                      context: context,
                      builder: (BuildContext context) {
                        return DeleteDialog(
                          title: "delete_backed_up_assets_enabled",
                          subtitle: "delete_backed_up_assets_description",
                          deleteFunction: () {
                            debugPrint("Deleting Local Assets");
                            ref.watch(assetProvider.notifier).deleteLocalAssets(
                                  backupState.allUniqueAssets,
                                );
                            ref.watch(backupProvider.notifier).cancelBackup();
                            ref.watch(backupProvider.notifier).getBackupInfo();
                            isUploaded.value = false;
                            Navigator.of(context).pop();
                          },
                        );
                      },
                    );
                  }
                : null,
            child: Text("delete_dialog_ok".tr()),
          ),
        ],
      ),
    );
  }
}
